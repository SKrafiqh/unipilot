
import { useNavigate } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 transition-colors duration-200">
            {/* Navbar */}
            <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
                    <div className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent flex items-center gap-2">
                        <span className="text-2xl">🎓</span> UniPilot
                    </div>
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <button
                            onClick={() => navigate('/login')}
                            className="btn-primary"
                        >
                            Sign In
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-20 pb-32 px-4 text-center bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
                <div className="max-w-4xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6 animate-fade-in-up">
                        New: AI Tutor Beta is live 🚀
                    </span>
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
                        The Ultimate OS for <br />
                        <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Student Success</span>
                    </h1>
                    <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Notes, Roadmaps, Projects, and AI-powered assistance. Everything you need to ace your degree and land that dream job.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={() => navigate('/login')}
                            className="btn-primary text-lg !px-8 !py-3 shadow-lg shadow-indigo-200"
                        >
                            Get Started for Free
                        </button>
                        <button
                            className="btn-secondary text-lg !px-8 !py-3"
                        >
                            View Design System
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything you need to grow</h2>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                            We've curated the best resources and tools to help you navigate your academic journey with ease.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            emoji="📚"
                            title="Smart Notes"
                            description="Structured, exam-focused notes for key subjects like DBMS and AI."
                        />
                        <FeatureCard
                            emoji="💻"
                            title="Mini Projects"
                            description="Resume-ready project ideas with submission guidelines."
                        />
                        <FeatureCard
                            emoji="🗺️"
                            title="Career Roadmaps"
                            description="Guided paths for Internships (Web Dev, ML, etc) with progress tracking."
                        />
                        <FeatureCard
                            emoji="🤖"
                            title="AI Mentor"
                            description="Instant doubt clearing and code reviews powered by LLMs."
                            isComingSoon
                        />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-slate-50 border-t border-slate-200 mt-auto">
                <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
                    <p>© 2025 UniPilot. Crafted for students.</p>
                </div>
            </footer>
        </div>
    );
}

function FeatureCard({ emoji, title, description, isComingSoon }) {
    return (
        <div className="card-base p-8 relative group hover:-translate-y-1">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">{emoji}</div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-500 leading-relaxed text-sm">{description}</p>
            {isComingSoon && (
                <span className="absolute top-4 right-4 bg-amber-50 text-amber-700 text-xs font-bold px-2 py-1 rounded-full border border-amber-100">
                    Soon
                </span>
            )}
        </div>
    );
}
