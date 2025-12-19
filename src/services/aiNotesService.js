/**
 * AI Notes Service
 * 
 * Frontend service layer for calling the AI notes generation API.
 * Handles API calls, error states, and provides fallback to demo mode.
 */

import { generateDemoNotes } from '../utils/demoNotesGenerator';

const API_ENDPOINT = '/api/generate-notes';

/**
 * Generate AI-powered notes
 * 
 * @param {Object} params - Generation parameters
 * @param {string} params.subject - Subject name
 * @param {string} params.unit - Unit number
 * @param {string} params.topic - Topic to generate notes for
 * @param {string} params.difficulty - Difficulty level
 * @param {string} [params.userId] - Optional user ID for rate limiting
 * @param {boolean} [params.isLoggedIn] - Whether user is logged in
 * @returns {Promise<Object>} Generated notes and metadata
 */
export async function generateAINotes({ subject, unit, topic, difficulty, userId = null, isLoggedIn = false }) {
    try {
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                subject,
                unit,
                topic,
                difficulty,
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
                notes: null,
            };
        }

        // Handle API unavailable - fallback to demo mode
        if (data.useDemoMode) {
            console.log('AI service unavailable, falling back to demo mode');
            const demoNotes = await generateDemoNotes(subject, unit, topic, difficulty);
            return {
                success: true,
                notes: demoNotes,
                source: 'demo',
                message: 'Using demo mode (AI temporarily unavailable)',
            };
        }

        // Handle other errors
        if (!response.ok) {
            throw new Error(data.message || 'Failed to generate notes');
        }

        // Success
        return {
            success: true,
            notes: data.notes,
            remaining: data.remaining,
            source: data.source || 'ai',
        };

    } catch (error) {
        console.error('AI Notes Service Error:', error);

        // Fallback to demo mode on any error
        try {
            const demoNotes = await generateDemoNotes(subject, unit, topic, difficulty);
            return {
                success: true,
                notes: demoNotes,
                source: 'demo',
                message: 'Using demo mode (connection error)',
            };
        } catch (demoError) {
            return {
                success: false,
                error: true,
                message: 'Failed to generate notes. Please try again.',
                notes: null,
            };
        }
    }
}

/**
 * Check if the AI service is available
 * @returns {Promise<boolean>}
 */
export async function checkAIServiceHealth() {
    try {
        // Simple health check - we'll just assume it's available
        // In production, you might want a dedicated health endpoint
        return true;
    } catch {
        return false;
    }
}
