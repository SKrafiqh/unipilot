
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateProjectIdea } from '../ai/mockAI';
import { logActivity } from '../utils/activityLogger';

export default function ProjectGenerator() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        domain: 'DBMS',
        difficulty: 'Beginner'
    });
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {
        setLoading(true);
        setResult(null); // Clear previous result



        // ...

        try {
            const idea = await generateProjectIdea(formData.domain, formData.difficulty);
            setResult(idea);
            logActivity('ai', `Generated ${formData.difficulty} ${formData.domain} project idea: ${idea.title}`);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-200 font-sans p-6 md:p-12">

            {/* Header / Nav */}
            <div className="max-w-4xl mx-auto mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium flex items-center gap-2 mb-2"
                    >
                        ← Back to Dashboard
                    </button>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                        <span className="text-4xl">🤖</span> AI Project Generator
                        <span className="bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-xs font-bold px-2 py-1 rounded-full border border-indigo-200 dark:border-indigo-700 uppercase tracking-wide">
                            Beta
                        </span>
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">
                        Stuck? Let our AI suggest a tailored project for your portfolio.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Controls Section */}
                <div className="md:col-span-1 space-y-6">
                    <div className="card bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">Configuration</h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Domain</label>
                                <select
                                    className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 py-2 px-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                                    value={formData.domain}
                                    onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                                >
                                    <option value="DBMS">DBMS / SQL</option>
                                    <option value="AI/ML">AI & Machine Learning</option>
                                    <option value="Web Development">Web Development</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Difficulty</label>
                                <select
                                    className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 py-2 px-3 focus:ring-2 focus:ring-indigo-500 outline-none"
                                    value={formData.difficulty}
                                    onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                                >
                                    <option value="Beginner">Beginner (Weekend Project)</option>
                                    <option value="Intermediate">Intermediate (Portfolio Ready)</option>
                                </select>
                            </div>

                            <button
                                onClick={handleGenerate}
                                disabled={loading}
                                className="w-full btn-primary mt-4 flex justify-center items-center gap-2"
                            >
                                {loading ? 'Thinking...' : '✨ Generate Idea'}
                            </button>
                        </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                        <h3 className="text-sm font-bold text-blue-800 dark:text-blue-300 mb-1">How it works</h3>
                        <p className="text-xs text-blue-600 dark:text-blue-400">
                            We select curated project templates based on industry trends to help you learn faster.
                        </p>
                    </div>
                </div>

                {/* Results Section */}
                <div className="md:col-span-2">
                    {loading ? (
                        <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 animate-pulse bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 border-dashed">
                            <div className="text-4xl mb-4">🧠</div>
                            <p>Analyzing requirements...</p>
                        </div>
                    ) : result ? (
                        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden animate-fade-in-up">
                            <div className="bg-indigo-600 p-6 text-white">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="text-indigo-200 text-sm font-semibold uppercase tracking-wider mb-1">{formData.difficulty} • {formData.domain}</div>
                                        <h2 className="text-2xl font-bold">{result.title}</h2>
                                    </div>
                                    <span className="text-4xl">💡</span>
                                </div>
                            </div>

                            <div className="p-8 space-y-8">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                                        📝 Overview
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                        {result.description}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                        ✨ Key Features
                                    </h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {result.features.map((feat, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
                                                <span className="text-indigo-500 font-bold">•</span>
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                                        🛠 Tech Stack
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {result.techStack.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-md border border-slate-200 dark:border-slate-600">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="border-t border-slate-100 dark:border-slate-700 pt-6 flex justify-end">
                                    <button className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm hover:underline">
                                        Save to Roadmap (Coming Soon)
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 border-dashed">
                            <div className="text-4xl mb-4 grayscale opacity-50">✨</div>
                            <p>Select options and click generate to start.</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
