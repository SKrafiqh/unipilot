/**
 * Vercel Serverless Function: AI Notes Generator (OpenAI)
 */

const rateLimitStore = new Map();

const DEMO_LIMIT = 10;
const LOGGED_IN_LIMIT = 35;
const RATE_LIMIT_WINDOW_MS = 24 * 60 * 60 * 1000;

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
function buildPrompt(subject, unit, topic, difficulty) {
    return `
You are an expert university professor.

Generate detailed, exam-oriented engineering notes.

Subject: ${subject}
Unit: ${unit}
Topic: ${topic}
Difficulty: ${difficulty}

Requirements:
- Clear explanations
- Bullet points & headings
- Real-world examples
- Diagram descriptions (text only)
- Exam-focused points
- Structured like a textbook

Return output in JSON ONLY:

{
  "introduction": "",
  "explanation": "",
  "examples": "",
  "diagramDescription": "",
  "examPoints": ""
}
`;
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
                { role: "system", content: "You are a helpful professor." },
                { role: "user", content: prompt },
            ],
            temperature: 0.7,
            max_tokens: 1800,
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
        const cleaned = text.replace(/```json|```/g, "").trim();
        const parsed = JSON.parse(cleaned);

        return {
            introduction: parsed.introduction || "",
            explanation: parsed.explanation || "",
            examples: parsed.examples || "",
            diagramDescription: parsed.diagramDescription || "",
            examPoints: parsed.examPoints || "",
        };
    } catch (err) {
        return {
            introduction: "Introduction unavailable.",
            explanation: text,
            examples: "See explanation.",
            diagramDescription: "See explanation.",
            examPoints: "See explanation.",
        };
    }
}

/* ---------------- HANDLER ---------------- */
export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") return res.status(200).end();
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

    try {
        const { subject, unit, topic, difficulty, userId, isLoggedIn } = req.body;

        if (!subject || !unit || !topic || !difficulty) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const identifier = userId || req.headers["x-forwarded-for"] || "demo-user";
        const rate = checkRateLimit(identifier, isLoggedIn === true);

        if (!rate.allowed) {
            return res.status(429).json({
                error: "Rate limit exceeded",
                message: isLoggedIn
                    ? "Daily limit reached."
                    : "Demo limit reached. Login for more.",
                isRateLimited: true,
            });
        }

        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
            return res.status(503).json({
                error: "AI unavailable",
                useDemoMode: true,
            });
        }

        const prompt = buildPrompt(subject, unit, topic, difficulty);
        const aiText = await callOpenAI(prompt, apiKey);
        const notes = parseAIResponse(aiText);

        return res.status(200).json({
            success: true,
            notes,
            remaining: rate.remaining,
            source: "openai",
        });

    } catch (err) {
        console.error("AI ERROR:", err);
        return res.status(500).json({
            error: "AI generation failed",
            useDemoMode: true,
        });
    }
}
