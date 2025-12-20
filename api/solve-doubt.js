import OpenAI from "openai";

/* ---------------- CONFIG ---------------- */
const rateLimitStore = new Map();

const DEMO_LIMIT = 10;
const LOGGED_IN_LIMIT = 35;
const RATE_LIMIT_WINDOW_MS = 24 * 60 * 60 * 1000;
const MIN_QUESTION_LENGTH = 10;
const MAX_QUESTION_LENGTH = 1000;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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
  return `
You are an expert engineering tutor.

Subject: ${subject}
Difficulty: ${level}

Student Doubt:
${question}

Respond ONLY in valid JSON:

{
  "explanation": "Clear step-by-step explanation",
  "example": "One simple practical example",
  "examTip": "One short exam-oriented tip"
}
`;
}

/* ---------------- HANDLER ---------------- */
export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    if (!process.env.OPENAI_API_KEY) {
      console.error("❌ OPENAI_API_KEY missing");
      return res.status(500).json({
        error: "AI service unavailable",
      });
    }

    const { subject, question, level, userId, isLoggedIn } = req.body;

    if (!subject || !question || !level) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    if (question.length < MIN_QUESTION_LENGTH || question.length > MAX_QUESTION_LENGTH) {
      return res.status(400).json({ error: "Invalid question length" });
    }

    const identifier = userId || req.headers["x-forwarded-for"] || "demo";
    const rate = checkRateLimit(identifier, isLoggedIn === true);

    if (!rate.allowed) {
      return res.status(429).json({
        error: "Rate limit exceeded",
        isRateLimited: true,
      });
    }

    const prompt = buildPrompt(subject, question, level);

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // ✅ SAFE MODEL
      messages: [
        { role: "system", content: "You are a helpful academic tutor." },
        { role: "user", content: prompt },
      ],
      temperature: 0.6,
    });

    const rawText = completion.choices[0].message.content;
    const cleaned = rawText.replace(/```json|```/g, "").trim();
    const solution = JSON.parse(cleaned);

    return res.status(200).json({
      success: true,
      solution,
      remaining: rate.remaining,
      source: "openai",
    });

  } catch (error) {
    console.error("🔥 AI ERROR:", error);
    return res.status(500).json({
      error: "Failed to solve doubt",
      message: error.message,
    });
  }
}
