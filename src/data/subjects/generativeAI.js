/**
 * Generative AI - Complete Subject Notes
 * Covers LLMs, Transformers, Prompt Engineering, RAG, and AI Applications
 */

const generativeAI = {
    id: "genai",
    title: "Generative AI & LLMs",
    description: "Master Generative AI: Transformers, LLMs, prompt engineering, RAG systems, and building AI applications.",
    color: "#f3e5f5",
    lastUpdated: "2025-01-20",
    units: [
        {
            title: "Unit 1: Foundations of Generative AI",
            topics: [
                {
                    title: "1.1 Introduction to Generative AI",
                    content: `# Introduction to Generative AI

## 1. What is Generative AI?
AI that creates new content (text, images, code, audio) rather than just analyzing existing data.

## 2. Types of Generative Models

| Type | Output | Examples |
|------|--------|----------|
| **Text** | Articles, code, chat | GPT-4, Claude, Gemini |
| **Image** | Art, photos | DALL-E, Midjourney, Stable Diffusion |
| **Audio** | Music, speech | Suno, ElevenLabs |
| **Video** | Clips, animations | Runway, Sora |
| **Code** | Programs | GitHub Copilot, Cursor |

## 3. Key Milestones

| Year | Breakthrough |
|------|--------------|
| 2017 | Transformer architecture (Attention Is All You Need) |
| 2018 | BERT (bidirectional understanding) |
| 2020 | GPT-3 (175B parameters, few-shot learning) |
| 2022 | ChatGPT (conversational AI goes mainstream) |
| 2023 | GPT-4, Claude 2, Gemini (multimodal) |
| 2024 | Claude 3.5, GPT-4o, open-source explosion |

## 4. How LLMs Work (Simplified)
1. **Tokenization**: Text → numbers
2. **Embedding**: Numbers → vectors
3. **Attention**: Find relationships
4. **Generation**: Predict next token

\`\`\`
Input: "The cat sat on the"
↓
[Tokenize] → [15496, 2857, 3332, 319, 262]
↓
[Model] → Probability distribution
↓
Output: "mat" (highest probability)
\`\`\`

## 5. Capabilities & Limitations

### Capabilities
- Natural language understanding
- Translation, summarization
- Code generation
- Reasoning (with limitations)

### Limitations
- Hallucinations (confident but wrong)
- Knowledge cutoff
- No real-time information
- Context window limits

## Exam Points
- What is the difference between generative and discriminative AI?
- List 3 types of generative models with examples
- What are hallucinations in LLMs?`
                },
                {
                    title: "1.2 Transformer Architecture",
                    content: `# Transformer Architecture

## 1. The Breakthrough
Before transformers: RNNs/LSTMs (sequential, slow)
Transformers: Parallel processing + attention mechanism

## 2. Architecture Overview

\`\`\`
Input Embeddings + Positional Encoding
            ↓
    ┌───────────────┐
    │   Encoder     │ (BERT, embeddings)
    │   Stack       │
    └───────────────┘
            ↓
    ┌───────────────┐
    │   Decoder     │ (GPT, generation)
    │   Stack       │
    └───────────────┘
            ↓
    Output Probabilities
\`\`\`

## 3. Self-Attention Mechanism
"Attending" to relevant parts of input.

### Query, Key, Value
\`\`\`
Attention(Q, K, V) = softmax(QK^T / √d_k) × V

Q = Query (what am I looking for?)
K = Key (what do I contain?)
V = Value (what do I return?)
\`\`\`

### Example
Sentence: "The cat sat on the mat because it was tired"
Q: "it" 
K: All words
Result: "it" attends strongly to "cat"

## 4. Multi-Head Attention
Multiple attention "heads" capture different relationships.
\`\`\`python
# 8 heads, each with dimension 64
# Total: 512 dimensions
multi_head_attention = MultiHeadAttention(
    num_heads=8,
    key_dim=64
)
\`\`\`

## 5. Positional Encoding
Transformers don't have sequence order → add position info.

\`\`\`
PE(pos, 2i) = sin(pos / 10000^(2i/d))
PE(pos, 2i+1) = cos(pos / 10000^(2i/d))
\`\`\`

## 6. Types of Transformers

| Type | Architecture | Use Case |
|------|--------------|----------|
| **Encoder-only** | BERT | Classification, embeddings |
| **Decoder-only** | GPT | Text generation |
| **Encoder-Decoder** | T5, BART | Translation, summarization |

## Exam Points
- Explain self-attention mechanism
- What is multi-head attention?
- Compare encoder-only vs decoder-only`
                }
            ]
        },
        {
            title: "Unit 2: Large Language Models",
            topics: [
                {
                    title: "2.1 Training & Fine-tuning LLMs",
                    content: `# Training LLMs

## 1. Pre-training
Train on massive text corpus (internet, books).

### Objective: Next Token Prediction
\`\`\`
Input: "The quick brown fox"
Target: "jumps"
\`\`\`

### Scale
| Model | Parameters | Training Data |
|-------|------------|---------------|
| GPT-2 | 1.5B | 40GB |
| GPT-3 | 175B | 570GB |
| GPT-4 | ~1.7T (est.) | Unknown |
| Llama 2 | 70B | 2T tokens |

## 2. Fine-tuning
Adapt pre-trained model for specific task.

### Types
- **Supervised Fine-tuning (SFT)**: Train on labeled examples
- **RLHF (Reinforcement Learning from Human Feedback)**: Align with human preferences

### RLHF Process
\`\`\`
1. Collect human preference data
2. Train reward model
3. Optimize policy using PPO
\`\`\`

## 3. Parameter-Efficient Fine-tuning (PEFT)

### LoRA (Low-Rank Adaptation)
Train small adapter layers instead of full model.
\`\`\`python
from peft import LoraConfig, get_peft_model

config = LoraConfig(
    r=16,
    lora_alpha=32,
    lora_dropout=0.1,
    target_modules=["q_proj", "v_proj"]
)
model = get_peft_model(base_model, config)
# Only 0.1% of parameters trainable!
\`\`\`

### QLoRA
LoRA + 4-bit quantization = Fine-tune on consumer GPU.

## 4. Instruction Tuning
Train on instruction-response pairs.

\`\`\`json
{
  "instruction": "Summarize this article in 3 bullet points",
  "input": "Long article text...",
  "output": "• Point 1\\n• Point 2\\n• Point 3"
}
\`\`\`

## 5. Tokenization
\`\`\`python
from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("gpt2")
tokens = tokenizer.encode("Hello, world!")
# [15496, 11, 995, 0]

text = tokenizer.decode(tokens)
# "Hello, world!"
\`\`\`

## Exam Points
- What is RLHF?
- Explain LoRA and its benefits
- Difference between pre-training and fine-tuning`
                },
                {
                    title: "2.2 Popular LLMs Comparison",
                    content: `# Popular LLMs

## 1. OpenAI Models

### GPT-4 / GPT-4 Turbo
- **Strengths**: Best overall, multimodal
- **Context**: 128K tokens
- **Use Case**: Complex reasoning, code

### GPT-4o
- **Strengths**: Faster, cheaper, multimodal
- **Use Case**: Real-time applications

## 2. Anthropic Claude

### Claude 3.5 Sonnet
- **Strengths**: Long context, safety, coding
- **Context**: 200K tokens
- **Use Case**: Document analysis, code review

## 3. Google

### Gemini Pro / Ultra
- **Strengths**: Multimodal, Google integration
- **Context**: 1M tokens (Gemini 1.5)
- **Use Case**: Research, analysis

## 4. Open Source

### Llama 3 (Meta)
- **Sizes**: 8B, 70B, 405B
- **Strengths**: Open weights, commercial use
- **Use Case**: Self-hosted, fine-tuning

### Mistral
- **Sizes**: 7B, 8x7B (MoE)
- **Strengths**: Efficient, strong for size
- **Use Case**: Edge deployment

### Phi-3 (Microsoft)
- **Size**: 3.8B
- **Strengths**: Small but capable
- **Use Case**: Mobile, constrained environments

## 5. Comparison Table

| Model | Params | Context | Open | Best For |
|-------|--------|---------|------|----------|
| GPT-4o | ? | 128K | No | General |
| Claude 3.5 | ? | 200K | No | Coding, docs |
| Gemini 1.5 | ? | 1M | No | Long context |
| Llama 3 70B | 70B | 8K | Yes | Self-host |
| Mistral 7B | 7B | 32K | Yes | Efficient |

## 6. Choosing a Model
Consider:
- **Task complexity**: Simple vs reasoning
- **Privacy**: API vs self-hosted
- **Cost**: Per-token pricing
- **Latency**: Response time needs
- **Context length**: Document size

## Exam Points
- Compare GPT-4 vs Claude 3
- What is MoE (Mixture of Experts)?
- When to use open-source vs API?`
                }
            ]
        },
        {
            title: "Unit 3: Prompt Engineering",
            topics: [
                {
                    title: "3.1 Prompt Engineering Techniques",
                    content: `# Prompt Engineering

## 1. What is Prompt Engineering?
Crafting inputs to get desired outputs from LLMs.

## 2. Basic Techniques

### Clear Instructions
\`\`\`
❌ "Write about Python"
✅ "Write a 200-word beginner's guide to Python variables, 
    including 3 code examples and common mistakes to avoid."
\`\`\`

### Role Assignment
\`\`\`
You are an expert Python developer with 10 years of experience.
Review this code and suggest improvements:
[code]
\`\`\`

### Format Specification
\`\`\`
Respond in the following JSON format:
{
  "summary": "Brief overview",
  "key_points": ["point1", "point2"],
  "recommendation": "Your advice"
}
\`\`\`

## 3. Advanced Techniques

### Few-Shot Learning
Provide examples:
\`\`\`
Convert to formal English:

Casual: "gonna grab some coffee"
Formal: "I am going to get some coffee"

Casual: "wanna hang out later?"
Formal: "Would you like to spend time together later?"

Casual: "that's crazy cool!"
Formal:
\`\`\`

### Chain of Thought (CoT)
Ask for reasoning steps:
\`\`\`
Solve this step by step:
If a train travels at 60 mph for 2.5 hours, 
how far does it travel?

Let's think through this:
Step 1: ...
\`\`\`

### Zero-Shot CoT
Simply add: "Let's think step by step"

## 4. System Prompts
Set behavior for the entire conversation:
\`\`\`
system: You are a helpful coding assistant. 
Always explain your code with comments.
Never provide code without explanation.
If unsure, say so instead of guessing.
\`\`\`

## 5. Prompt Templates
\`\`\`python
template = """
Context: {context}
Question: {question}
Instructions: Answer based only on the context provided.
If the answer is not in the context, say "I don't know."
Answer:
"""
\`\`\`

## Exam Points
- Compare few-shot vs zero-shot
- What is Chain of Thought prompting?
- Write a prompt for code review task`
                },
                {
                    title: "3.2 Advanced Prompting Patterns",
                    content: `# Advanced Prompting Patterns

## 1. Self-Consistency
Generate multiple responses, take majority vote.
\`\`\`
Generate 5 different answers, then pick the most common one.
\`\`\`

## 2. Tree of Thoughts (ToT)
Explore multiple reasoning paths:
\`\`\`
Consider 3 different approaches to solve this:
Approach 1: [reasoning]
Approach 2: [reasoning]
Approach 3: [reasoning]
Now evaluate which is best and explain why.
\`\`\`

## 3. ReAct (Reasoning + Acting)
Combine reasoning with actions:
\`\`\`
Thought: I need to find the population of Tokyo
Action: search("Tokyo population 2024")
Observation: Tokyo has 13.96 million people
Thought: Now I can answer the question
Answer: Tokyo has approximately 14 million people
\`\`\`

## 4. Prompt Chaining
Break complex tasks into steps:
\`\`\`
Prompt 1: Extract key entities from this text
Prompt 2: Summarize relationships between entities
Prompt 3: Generate final analysis
\`\`\`

## 5. Structured Output

### JSON Mode
\`\`\`python
response = openai.chat.completions.create(
    model="gpt-4o",
    response_format={"type": "json_object"},
    messages=[{
        "role": "user",
        "content": "List 3 programming languages as JSON"
    }]
)
\`\`\`

### Function Calling
\`\`\`python
tools = [{
    "type": "function",
    "function": {
        "name": "get_weather",
        "parameters": {
            "type": "object",
            "properties": {
                "location": {"type": "string"},
                "unit": {"type": "string", "enum": ["celsius", "fahrenheit"]}
            }
        }
    }
}]
\`\`\`

## 6. Handling Limitations

### Reduce Hallucinations
\`\`\`
Only use information from the provided context.
If unsure, respond with "I don't have enough information."
Cite sources for any claims.
\`\`\`

### Control Length
\`\`\`
Respond in exactly 3 sentences.
Maximum 100 words.
\`\`\`

## Exam Points
- Explain ReAct pattern with example
- What is prompt chaining?
- How to reduce hallucinations?`
                }
            ]
        },
        {
            title: "Unit 4: RAG & AI Applications",
            topics: [
                {
                    title: "4.1 Retrieval-Augmented Generation (RAG)",
                    content: `# RAG - Retrieval-Augmented Generation

## 1. What is RAG?
Combine LLM with external knowledge retrieval.

\`\`\`
Question → [Retriever] → Relevant docs → [LLM + Context] → Answer
\`\`\`

## 2. Why RAG?
- **Up-to-date info**: Beyond training cutoff
- **Domain-specific**: Custom knowledge bases
- **Reduce hallucinations**: Grounded in sources
- **Cost-effective**: Smaller models work well

## 3. RAG Pipeline

### Step 1: Document Processing
\`\`\`python
# Load documents
from langchain.document_loaders import PyPDFLoader
loader = PyPDFLoader("document.pdf")
pages = loader.load()
\`\`\`

### Step 2: Chunking
\`\`\`python
from langchain.text_splitter import RecursiveCharacterTextSplitter

splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200
)
chunks = splitter.split_documents(pages)
\`\`\`

### Step 3: Embedding
\`\`\`python
from langchain.embeddings import OpenAIEmbeddings

embeddings = OpenAIEmbeddings()
vectors = embeddings.embed_documents([c.page_content for c in chunks])
\`\`\`

### Step 4: Vector Store
\`\`\`python
from langchain.vectorstores import Chroma

vectorstore = Chroma.from_documents(
    documents=chunks,
    embedding=embeddings
)
\`\`\`

### Step 5: Retrieval
\`\`\`python
relevant_docs = vectorstore.similarity_search(
    query="What is machine learning?",
    k=3  # Top 3 results
)
\`\`\`

### Step 6: Generation
\`\`\`python
from langchain.chains import RetrievalQA

qa_chain = RetrievalQA.from_chain_type(
    llm=ChatOpenAI(),
    retriever=vectorstore.as_retriever()
)
answer = qa_chain.run("What is machine learning?")
\`\`\`

## 4. Vector Databases

| Database | Features |
|----------|----------|
| Pinecone | Managed, scalable |
| Chroma | Open-source, local |
| Weaviate | Open-source, hybrid search |
| Qdrant | Fast, Rust-based |
| pgvector | PostgreSQL extension |

## 5. Improving RAG
- **Hybrid search**: Combine vector + keyword
- **Re-ranking**: Score results after retrieval
- **Query expansion**: Rephrase questions
- **Metadata filtering**: Filter by date, source

## Exam Points
- Draw RAG pipeline diagram
- What is chunking and why is it needed?
- Compare vector databases`
                },
                {
                    title: "4.2 Building AI Applications",
                    content: `# Building AI Applications

## 1. LangChain Framework
Python framework for LLM applications.

### Key Components
\`\`\`python
from langchain.llms import OpenAI
from langchain.chains import LLMChain
from langchain.prompts import PromptTemplate

# Create prompt
prompt = PromptTemplate(
    input_variables=["topic"],
    template="Write a haiku about {topic}"
)

# Create chain
chain = LLMChain(llm=OpenAI(), prompt=prompt)

# Run
result = chain.run("programming")
\`\`\`

### Agents
LLM decides which tools to use:
\`\`\`python
from langchain.agents import create_react_agent

tools = [search_tool, calculator_tool, weather_tool]
agent = create_react_agent(llm, tools, prompt)
agent.invoke({"input": "What's the weather in Paris?"})
\`\`\`

## 2. OpenAI SDK
\`\`\`python
from openai import OpenAI
client = OpenAI()

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Explain quantum computing"}
    ],
    temperature=0.7,
    max_tokens=500
)

print(response.choices[0].message.content)
\`\`\`

## 3. Streaming Responses
\`\`\`python
stream = client.chat.completions.create(
    model="gpt-4o",
    messages=[...],
    stream=True
)

for chunk in stream:
    print(chunk.choices[0].delta.content, end="")
\`\`\`

## 4. Building a Chatbot
\`\`\`python
messages = []

while True:
    user_input = input("You: ")
    messages.append({"role": "user", "content": user_input})
    
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=messages
    )
    
    assistant_msg = response.choices[0].message.content
    messages.append({"role": "assistant", "content": assistant_msg})
    print(f"Bot: {assistant_msg}")
\`\`\`

## 5. Deployment Options

| Platform | Strengths |
|----------|-----------|
| Vercel | Easy, serverless |
| AWS Lambda | Scalable |
| Modal | GPU workloads |
| Hugging Face Spaces | ML-focused |
| Streamlit | Quick prototypes |

## 6. Cost Optimization
- Cache common queries
- Use smaller models when possible
- Batch requests
- Set max_tokens limits
- Use streaming for better UX

## Exam Points
- Code a simple chatbot with OpenAI
- What are LangChain agents?
- List 3 ways to reduce API costs`
                }
            ]
        },
        {
            title: "Unit 5: AI Ethics & Future",
            topics: [
                {
                    title: "5.1 AI Ethics & Safety",
                    content: `# AI Ethics & Safety

## 1. Key Ethical Concerns

### Bias & Fairness
LLMs can perpetuate societal biases.
- Training data reflects human biases
- Can discriminate in hiring, lending
- Need bias testing and mitigation

### Misinformation
- Convincing but false content
- Deepfakes and synthetic media
- Election manipulation risks

### Privacy
- Training on personal data
- Memorization of sensitive info
- Data extraction attacks

### Job Displacement
- Automation of knowledge work
- Need for reskilling
- Economic inequality

## 2. AI Safety Concepts

### Alignment
Making AI systems do what humans want.
- Value alignment
- Goal specification
- Reward hacking prevention

### Hallucinations
Confident but incorrect outputs.
- Cite sources
- Use RAG for grounding
- Human verification

### Jailbreaking
Bypassing safety measures.
\`\`\`
Example attacks:
- Role-playing prompts
- Encoded instructions
- Prompt injection
\`\`\`

## 3. Responsible AI Practices

### Transparency
- Model cards documenting capabilities/limits
- Clear AI disclosure to users
- Explainable AI (XAI)

### Human Oversight
- Human-in-the-loop for critical decisions
- Review mechanisms
- Kill switches

### Testing
- Red teaming
- Bias audits
- Safety evaluations

## 4. Regulations

| Region | Regulation |
|--------|------------|
| EU | AI Act |
| US | Executive Order on AI |
| China | Generative AI regulations |

## 5. Building Responsibly
\`\`\`
✓ Test for biases before deployment
✓ Implement content moderation
✓ Provide clear AI disclosure
✓ Enable human escalation
✓ Regular safety audits
\`\`\`

## Exam Points
- List 4 ethical concerns in AI
- What is AI alignment?
- How to reduce hallucinations?`
                }
            ]
        }
    ]
};

export default generativeAI;
