/**
 * Vercel Serverless Function: AI Doubt Solver (OpenAI)
 * 
 * Securely handles student doubt resolution using OpenAI API.
 * Includes rate limiting, input validation, and structured JSON responses.
 */

const rateLimitStore = new Map();

const DEMO_LIMIT = 10;
const LOGGED_IN_LIMIT = 35;
const RATE_LIMIT_WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours
const MIN_QUESTION_LENGTH = 10;
const MAX_QUESTION_LENGTH = 1000;

/* ---------------- RATE LIMIT ---------------- */
function checkRateLimit(identifier, isLoggedIn) {
    const limit = isLoggedIn ? LOGGED_IN_LIMIT : DEMO_LIMIT;
    const now = Date.now();

    const record = rateLimitStore.get(identifier);

    if (!record || now - record.windowStart > RATE_LIMIT_WINDOW_MS) {
        rateLimitStore.set(identifier, { count: 1, windowStart: now });
        return { allowed: true, remaining: limit - 1 };
    }

    if (record.count >= limit) {
        return { allowed: false, remaining: 0 };
    }

    record.count += 1;
    return { allowed: true, remaining: limit - record.count };
}

/* ---------------- PROMPT ---------------- */
function buildPrompt(subject, question, level) {
    return `You are an expert engineering tutor helping students understand concepts clearly.

Subject: ${subject}
Student Doubt: ${question}
Difficulty Level: ${level}

Provide a clear, student-friendly explanation. Return your response as valid JSON ONLY (no markdown code blocks):

{
  "explanation": "Step-by-step explanation in simple language. Use bullet points for clarity.",
  "example": "One simple, practical example that illustrates the concept.",
  "examTip": "A short, exam-oriented tip that helps students score better."
}

Rules:
- Be concise and easy to understand
- Use simple language appropriate for ${level} level
- Focus on exam understanding
- Avoid unnecessary theory
- Make explanations memorable`;
}

/* ---------------- OPENAI CALL ---------------- */
async function callOpenAI(prompt, apiKey) {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are a helpful engineering tutor who explains concepts clearly and concisely." },
                { role: "user", content: prompt },
            ],
            temperature: 0.7,
            max_tokens: 1200,
        }),
    });

    if (!response.ok) {
        const err = await response.text();
        throw new Error(`OpenAI error ${response.status}: ${err}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
}

/* ---------------- PARSE RESPONSE ---------------- */
function parseAIResponse(text) {
    try {
        // Remove markdown code blocks if present
        const cleaned = text.replace(/```json|```/g, "").trim();
        const parsed = JSON.parse(cleaned);

        return {
            explanation: parsed.explanation || "Explanation not available.",
            example: parsed.example || "Example not available.",
            examTip: parsed.examTip || "No exam tip available.",
        };
    } catch (err) {
        // Fallback: treat entire response as explanation
        console.error("JSON parse error:", err.message);
        return {
            explanation: text,
            example: "See the explanation above for examples.",
            examTip: "Focus on understanding the core concept.",
        };
    }
}

/* ---------------- HANDLER ---------------- */
export default async function handler(req, res) {
    // CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") return res.status(200).end();
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

    try {
        const { subject, question, level, userId, isLoggedIn } = req.body;

        // Input validation
        if (!subject || !question || !level) {
            return res.status(400).json({
                error: "Missing required fields",
                message: "Please provide subject, question, and difficulty level."
            });
        }

        if (question.length < MIN_QUESTION_LENGTH) {
            return res.status(400).json({
                error: "Question too short",
                message: `Please provide at least ${MIN_QUESTION_LENGTH} characters for your doubt.`
            });
        }

        if (question.length > MAX_QUESTION_LENGTH) {
            return res.status(400).json({
                error: "Question too long",
                message: `Question must be less than ${MAX_QUESTION_LENGTH} characters.`
            });
        }

        // Rate limiting
        const identifier = userId || req.headers["x-forwarded-for"] || "demo-user";
        const rate = checkRateLimit(identifier, isLoggedIn === true);

        if (!rate.allowed) {
            return res.status(429).json({
                error: "Rate limit exceeded",
                message: isLoggedIn
                    ? "Daily limit reached. Please try again tomorrow."
                    : "Demo limit reached. Login for more!",
                isRateLimited: true,
            });
        }

        // Check for API key
        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
            console.error("OPENAI_API_KEY not configured");
            return res.status(503).json({
                error: "AI service unavailable",
                message: "AI service is temporarily unavailable. Please try again later.",
            });
        }

        // Build prompt and call OpenAI
        const prompt = buildPrompt(subject, question, level);
        const aiText = await callOpenAI(prompt, apiKey);
        const solution = parseAIResponse(aiText);

        return res.status(200).json({
            success: true,
            solution,
            remaining: rate.remaining,
            source: "openai",
        });

    } catch (err) {
        console.error("AI Doubt Solver ERROR:", err);
        return res.status(500).json({
            error: "AI generation failed",
            message: "Failed to solve doubt. Please try again.",
        });
    }
}
