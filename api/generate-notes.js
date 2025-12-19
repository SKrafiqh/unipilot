/**
 * Vercel Serverless Function: AI Notes Generator
 * 
 * This endpoint handles AI-powered note generation using Google Gemini.
 * It includes rate limiting, input validation, and secure API key handling.
 */

// In-memory rate limiting (resets on cold start, suitable for demo)
const rateLimitStore = new Map();

const DEMO_LIMIT = 2;
const LOGGED_IN_LIMIT = 10;
const RATE_LIMIT_WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours

/**
 * Check and update rate limit for a user
 */
function checkRateLimit(identifier, isLoggedIn) {
    const limit = isLoggedIn ? LOGGED_IN_LIMIT : DEMO_LIMIT;
    const now = Date.now();

    const userRecord = rateLimitStore.get(identifier);

    if (!userRecord || (now - userRecord.windowStart) > RATE_LIMIT_WINDOW_MS) {
        // New window
        rateLimitStore.set(identifier, { count: 1, windowStart: now });
        return { allowed: true, remaining: limit - 1 };
    }

    if (userRecord.count >= limit) {
        return { allowed: false, remaining: 0 };
    }

    userRecord.count += 1;
    rateLimitStore.set(identifier, userRecord);
    return { allowed: true, remaining: limit - userRecord.count };
}

/**
 * Build the AI prompt for note generation
 */
function buildPrompt(subject, unit, topic, difficulty) {
    return `You are an expert university professor specializing in ${subject}.
Generate detailed, exam-oriented engineering notes for students.

Subject: ${subject}
Unit: ${unit}
Topic: ${topic}
Difficulty Level: ${difficulty}

Requirements:
- Clear, concise explanations suitable for ${difficulty} level students
- Use bullet points and structured headings
- Include real-world examples and applications
- Provide diagram descriptions (text-only, no actual images)
- Focus on exam-relevant points and potential questions
- Structure like a professional textbook

Output your response in the following JSON format ONLY (no markdown code blocks):
{
  "introduction": "Brief introduction to the topic...",
  "explanation": "Detailed explanation with key concepts...",
  "examples": "Real-world examples and case studies...",
  "diagramDescription": "Text description of relevant diagrams...",
  "examPoints": "Key exam points, tips, and potential questions..."
}

Ensure each section is comprehensive and helpful for exam preparation.`;
}

/**
 * Call Google Gemini API
 */
async function callGeminiAPI(prompt, apiKey) {
    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [{ text: prompt }]
                    }
                ],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 2048,
                }
            })
        }
    );

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Gemini API error: ${response.status} - ${error}`);
    }

    const data = await response.json();

    if (!data.candidates || !data.candidates[0]?.content?.parts?.[0]?.text) {
        throw new Error('Invalid response structure from Gemini API');
    }

    return data.candidates[0].content.parts[0].text;
}

/**
 * Parse AI response into structured notes
 */
function parseAIResponse(responseText) {
    try {
        // Try to extract JSON from the response
        let jsonStr = responseText.trim();

        // Remove markdown code blocks if present
        if (jsonStr.startsWith('```json')) {
            jsonStr = jsonStr.slice(7);
        }
        if (jsonStr.startsWith('```')) {
            jsonStr = jsonStr.slice(3);
        }
        if (jsonStr.endsWith('```')) {
            jsonStr = jsonStr.slice(0, -3);
        }

        const parsed = JSON.parse(jsonStr.trim());

        return {
            introduction: parsed.introduction || 'Introduction not available.',
            explanation: parsed.explanation || 'Explanation not available.',
            examples: parsed.examples || 'Examples not available.',
            diagramDescription: parsed.diagramDescription || 'Diagram description not available.',
            examPoints: parsed.examPoints || 'Exam points not available.',
        };
    } catch (error) {
        // If JSON parsing fails, try to extract sections manually
        console.error('JSON parse error, attempting manual extraction:', error.message);

        return {
            introduction: responseText.substring(0, 500),
            explanation: responseText,
            examples: 'See explanation above.',
            diagramDescription: 'Diagram description included in explanation.',
            examPoints: 'Key points included in explanation.',
        };
    }
}

/**
 * Main handler for the serverless function
 */
export default async function handler(req, res) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { subject, unit, topic, difficulty, userId, isLoggedIn } = req.body;

        // Input validation
        if (!subject || !unit || !topic || !difficulty) {
            return res.status(400).json({
                error: 'Missing required fields',
                message: 'Please provide subject, unit, topic, and difficulty.'
            });
        }

        if (topic.length > 200) {
            return res.status(400).json({
                error: 'Topic too long',
                message: 'Topic must be less than 200 characters.'
            });
        }

        // Rate limiting
        const identifier = userId || req.headers['x-forwarded-for'] || 'anonymous';
        const rateCheck = checkRateLimit(identifier, isLoggedIn === true);

        if (!rateCheck.allowed) {
            return res.status(429).json({
                error: 'Rate limit exceeded',
                message: isLoggedIn
                    ? 'You have reached your daily limit. Please try again tomorrow.'
                    : 'Demo limit reached (2/day). Login for more generations!',
                isRateLimited: true
            });
        }

        // Check for API key
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            console.error('GEMINI_API_KEY not configured');
            return res.status(503).json({
                error: 'AI service unavailable',
                message: 'AI service is temporarily unavailable. Please try again later.',
                useDemoMode: true
            });
        }

        // Build prompt and call AI
        const prompt = buildPrompt(subject, unit, topic, difficulty);
        const aiResponse = await callGeminiAPI(prompt, apiKey);
        const notes = parseAIResponse(aiResponse);

        return res.status(200).json({
            success: true,
            notes,
            remaining: rateCheck.remaining,
            source: 'ai'
        });

    } catch (error) {
        console.error('AI generation error:', error);

        return res.status(500).json({
            error: 'Generation failed',
            message: 'Failed to generate notes. Please try again.',
            useDemoMode: true
        });
    }
}
