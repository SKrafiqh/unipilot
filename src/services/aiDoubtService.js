/**
 * AI Doubt Service
 * 
 * Frontend service layer for calling the AI Doubt Solver API.
 * Handles API calls, error states, and provides graceful fallbacks.
 */

const API_ENDPOINT = '/api/solve-doubt';

/**
 * Solve a student's doubt using AI
 * 
 * @param {Object} params - Request parameters
 * @param {string} params.subject - Subject name
 * @param {string} params.question - Student's doubt/question
 * @param {string} params.level - Difficulty level
 * @param {string} [params.userId] - Optional user ID for rate limiting
 * @param {boolean} [params.isLoggedIn] - Whether user is logged in
 * @returns {Promise<Object>} AI solution and metadata
 */
export async function solveDoubt({ subject, question, level, userId = null, isLoggedIn = false }) {
    try {
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                subject,
                question,
                level,
                userId,
                isLoggedIn,
            }),
        });

        const data = await response.json();

        // Handle rate limiting
        if (response.status === 429) {
            return {
                success: false,
                isRateLimited: true,
                message: data.message || 'Rate limit exceeded. Please try again later.',
                solution: null,
            };
        }

        // Handle validation errors
        if (response.status === 400) {
            return {
                success: false,
                isValidationError: true,
                message: data.message || 'Invalid input. Please check your question.',
                solution: null,
            };
        }

        // Handle other errors
        if (!response.ok) {
            return {
                success: false,
                error: true,
                message: data.message || 'Failed to solve doubt. Please try again.',
                solution: null,
            };
        }

        // Success
        return {
            success: true,
            solution: data.solution,
            remaining: data.remaining,
            source: data.source || 'openai',
        };

    } catch (error) {
        console.error('AI Doubt Service Error:', error);
        return {
            success: false,
            error: true,
            message: 'Network error. Please check your connection and try again.',
            solution: null,
        };
    }
}
