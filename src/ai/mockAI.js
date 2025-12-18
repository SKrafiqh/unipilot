
// This is a simulation of an AI model response.
// In the future, this file can be replaced by an API call to OpenAI or Gemini.

const mockDatabase = {
    "DBMS": {
        "Beginner": [
            {
                title: "Personal Finance Tracker",
                description: "A database-driven application to track income, expenses, and categories for individual users.",
                features: ["User authentication using triggers", "Stored procedures for monthly summaries", "Data visualization for expense categories"],
                techStack: ["MySQL", "Python (Flask)", "Chart.js"]
            },
            {
                title: "Simple Contact Management System",
                description: "Organize contacts with search and category filtering.",
                features: ["CRUD operations for contacts", "Group contacts by tags", "Export data to CSV"],
                techStack: ["SQLite", "React", "Node.js"]
            }
        ],
        "Intermediate": [
            {
                title: "Hospital Management DB",
                description: "Complex schema handling doctors, patients, appointments, and billing.",
                features: ["Normalization up to BCNF", "Complex join queries for patient history", "Transaction management for billing"],
                techStack: ["PostgreSQL", "Java (Spring Boot)", "React"]
            },
            {
                title: "University Course Registration Upgrade",
                description: "Handle student enrollments, prerequisites, and conflicting schedules.",
                features: ["ACID transaction compliance", "Views for student transcripts", "Role-based access control"],
                techStack: ["Oracle/MySQL", "PHP/Laravel", "Vue.js"]
            }
        ]
    },
    "AI/ML": {
        "Beginner": [
            {
                title: "Movie Recommendation System",
                description: "Suggest movies based on user ratings using simple collaborative filtering.",
                features: ["Data preprocessing with Pandas", "Cosine similarity calculation", "Simple web interface"],
                techStack: ["Python", "Scikit-Learn", "Streamlit"]
            },
            {
                title: "Handwritten Digit Recognizer",
                description: "Classic computer vision project to classify digits from the MNIST dataset.",
                features: ["CNN architecture basics", "Model training and validation", "Canvas drawing input"],
                techStack: ["TensorFlow/Keras", "Python", "React"]
            }
        ],
        "Intermediate": [
            {
                title: "Stock Price Predictor",
                description: "Time-series forecasting using LSTM networks to predict future stock trends.",
                features: ["Data fetching from Yahoo Finance", "LSTM model implementation", "Real-time interactive charts"],
                techStack: ["PyTorch", "Python", "Plotly"]
            },
            {
                title: "Sentiment Analysis Dashboard",
                description: "Analyze Twitter or Reddit sentiment on specific topics in real-time.",
                features: ["NLP pipeline (Tokenization, Lemmatization)", "Twitter API integration", "Live sentiment gauge"],
                techStack: ["NLTK/Spacy", "Python", "D3.js"]
            }
        ]
    },
    "Web Development": {
        "Beginner": [
            {
                title: "Recipe Finder App",
                description: "Search for recipes by ingredients using a public API.",
                features: ["Fetch API usage", "Responsive grid layout", "Save favorites to local storage"],
                techStack: ["React", "TheMealDB API", "CSS Modules"]
            },
            {
                title: "Markdown Note Taker",
                description: "Create, edit, and preview markdown notes in the browser.",
                features: ["Live markdown preview", "Dark mode toggle", "Search notes functionality"],
                techStack: ["Vue.js", "Marked.js", "Tailwind CSS"]
            }
        ],
        "Intermediate": [
            {
                title: "Real-time Chat Application",
                description: "A Slack-like chat room with channels and direct messaging.",
                features: ["WebSockets implementation", "User online status", "Message persistence"],
                techStack: ["Socket.io", "Node.js", "React", "MongoDB"]
            },
            {
                title: "E-learning Platform",
                description: "Video course platform with progress tracking and quizzes.",
                features: ["Video streaming optimization", "User progress tracking in DB", "Quiz engine"],
                techStack: ["Next.js", "PostgreSQL", "Prisma", "AWS S3"]
            }
        ]
    }
};

/**
 * Simulates an AI generation delay and returns a random project idea.
 */
export const generateProjectIdea = async (domain, difficulty) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const domainData = mockDatabase[domain];
            if (!domainData) {
                resolve(null);
                return;
            }
            const difficultyData = domainData[difficulty] || domainData["Beginner"];

            // Random selection
            const randomIdea = difficultyData[Math.floor(Math.random() * difficultyData.length)];
            resolve(randomIdea);
        }, 1500); // 1.5s simulated delay
    });
};
