/**
 * Mock function to simulate AI-generated notes for engineering subjects.
 * In a real production environment, this would call an AI API like Gemini or OpenAI.
 */
export const generateDemoNotes = async (subject, unit, topic, difficulty) => {
    // Simulate network/processing delay
    await new Promise((resolve) => setTimeout(resolve, 2500));

    const notes = {
        introduction: `The study of **${topic}** is a fundamental aspect of **${subject}** (Unit ${unit}). At a **${difficulty}** level, understanding its core principles is essential for mastering the domain.`,
        explanation: `
**${topic}** refers to the core mechanism within ${subject} that handles fundamental operations. 

Key concepts include:
- **Efficiency:** How the system optimizes resources.
- **Scalability:** The ability to handle growing amounts of work.
- **Reliability:** Ensuring consistent performance under various conditions.

In the context of ${subject}, ${topic} plays a pivotal role in bridging theoretical concepts with practical implementation.
    `,
        examples: `
- **Case Study 1:** A real-world application in modern ${subject} systems where ${topic} improved performance by 40%.
- **Case Study 2:** Implementation of ${topic} in large-scale enterprise environments.
    `,
        diagramDescription: `
*Diagram 1: ${topic} Architecture*
The diagram would typically show a multi-layered structure:
1. **Top Layer:** User Interaction / Interface.
2. **Middle Layer:** Processing engine where ${topic} logic resides.
3. **Bottom Layer:** Data storage and resource management.
Arrows indicate the flow of information from the interface through the processing engine to the storage layer.
    `,
        examPoints: `
- Explain the significance of **${topic}** in **${subject}**.
- Compare and contrast different approaches to implementing **${topic}**.
- List the primary advantages and disadvantages of modern **${topic}** architectures.
- **Key Tip:** Focus on the scalability aspects of ${topic} for higher marks in exams.
    `,
    };

    return notes;
};
