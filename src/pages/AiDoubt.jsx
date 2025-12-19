import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { solveDoubt } from '../services/aiDoubtService';
import ThemeToggle from '../components/ThemeToggle';
import { AIIcon } from '../components/Illustrations';

const subjects = [
    'Computer Networks',
    'DBMS',
    'Python',
    'Discrete Math',
    'Engineering Math',
    'Generative AI',
];

const difficultyLevels = [
    { id: 'beginner', label: 'Beginner', description: 'Basic concepts' },
    { id: 'intermediate', label: 'Intermediate', description: 'Deeper understanding' },
    { id: 'exam-focused', label: 'Exam-focused', description: 'Exam preparation' },
];

export default function AiDoubt() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [solution, setSolution] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [showLimitMessage, setShowLimitMessage] = useState(false);
    const [user, setUser] = useState(null);

    const [formData, setFormData] = useState({
        subject: subjects[0],
        question: '',
        level: 'intermediate',
    });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.question.trim().length < 10) {
            setErrorMessage('Please enter at least 10 characters for your doubt.');
            return;
        }

        setErrorMessage(null);
        setShowLimitMessage(false);
        setIsLoading(true);
        setSolution(null);

        try {
            const result = await solveDoubt({
                subject: formData.subject,
                question: formData.question,
                level: formData.level,
                userId: user?.uid || null,
                isLoggedIn: !!user,
            });

            if (result.isRateLimited) {
                setShowLimitMessage(true);
                setErrorMessage(result.message);
                return;
            }

            if (!result.success) {
                setErrorMessage(result.message || 'Failed to solve doubt.');
                return;
            }

            setSolution(result.solution);

        } catch (error) {
            console.error('Error solving doubt:', error);
            setErrorMessage('An unexpected error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans transition-colors duration-200">
            {/* Navigation */}
            <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
                    <div
                        className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent flex items-center gap-2 cursor-pointer"
                        onClick={() => navigate('/dashboard')}
                    >
                        <span className="text-2xl">🎓</span> UniPilot
                    </div>
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <button
                            onClick={() => navigate('/dashboard')}
                            className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors"
                        >
                            Back to Dashboard
                        </button>
                    </div>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto px-4 py-10">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold mb-4 shadow-lg">
                        <AIIcon className="w-4 h-4" /> AI BETA
                    </div>
                    <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
                        AI Doubt Solver
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        Stuck on a concept? Ask your doubt and get instant, exam-focused explanations.
                        {!user && (
                            <span className="block mt-1 font-medium text-orange-500">
                                Demo users: Limited queries/day • Login for more!
                            </span>
                        )}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {/* Error/Limit Messages */}
                    {showLimitMessage && (
                        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-4 rounded-xl flex items-center gap-4 animate-in fade-in zoom-in duration-300">
                            <span className="text-2xl">⚠️</span>
                            <div>
                                <h4 className="font-bold text-amber-800 dark:text-amber-400 uppercase text-xs tracking-wider mb-1">
                                    {user ? 'Daily Limit Reached' : 'Demo Limit Reached'}
                                </h4>
                                <p className="text-sm text-amber-700 dark:text-amber-300">{errorMessage}</p>
                            </div>
                        </div>
                    )}

                    {errorMessage && !showLimitMessage && (
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-xl flex items-center gap-4 animate-in fade-in zoom-in duration-300">
                            <span className="text-2xl">❌</span>
                            <div>
                                <h4 className="font-bold text-red-800 dark:text-red-400 uppercase text-xs tracking-wider mb-1">Error</h4>
                                <p className="text-sm text-red-700 dark:text-red-300">{errorMessage}</p>
                            </div>
                        </div>
                    )}

                    {/* Input Form */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Subject Dropdown */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                    Select Subject
                                </label>
                                <select
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                                    disabled={isLoading}
                                >
                                    {subjects.map((sub) => (
                                        <option key={sub} value={sub}>{sub}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Question Textarea */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                                    Your Doubt / Question
                                </label>
                                <textarea
                                    placeholder="e.g., What is the difference between TCP and UDP? When should I use each?"
                                    value={formData.question}
                                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none transition-all resize-none"
                                    rows={4}
                                    maxLength={1000}
                                    required
                                    disabled={isLoading}
                                />
                                <p className="text-xs text-slate-400 mt-1 text-right">
                                    {formData.question.length}/1000 characters
                                </p>
                            </div>

                            {/* Difficulty Selector */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                                    Difficulty Level
                                </label>
                                <div className="grid grid-cols-3 gap-3">
                                    {difficultyLevels.map((lvl) => (
                                        <label key={lvl.id} className="cursor-pointer">
                                            <input
                                                type="radio"
                                                name="level"
                                                value={lvl.id}
                                                checked={formData.level === lvl.id}
                                                onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                                                className="sr-only peer"
                                                disabled={isLoading}
                                            />
                                            <div className="text-center p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 peer-checked:bg-orange-50 dark:peer-checked:bg-orange-900/30 peer-checked:border-orange-500 transition-all">
                                                <div className="font-semibold text-slate-700 dark:text-slate-300 peer-checked:text-orange-600 dark:peer-checked:text-orange-400 text-sm">
                                                    {lvl.label}
                                                </div>
                                                <div className="text-xs text-slate-400 mt-0.5">{lvl.description}</div>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className={`w-full py-3.5 rounded-xl font-bold text-white transition-all shadow-lg ${isLoading || showLimitMessage
                                        ? 'bg-slate-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-orange-500 to-pink-500 hover:shadow-orange-500/25 active:scale-95'
                                    }`}
                                disabled={isLoading || showLimitMessage}
                            >
                                {isLoading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Solving Your Doubt...
                                    </span>
                                ) : (
                                    'Solve My Doubt'
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Loading State */}
                    {isLoading && (
                        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 min-h-[300px]">
                            <div className="flex flex-col items-center justify-center mb-8">
                                <div className="relative mb-4">
                                    <div className="w-16 h-16 border-4 border-orange-100 dark:border-slate-700 border-t-orange-500 rounded-full animate-spin"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-xl">🤔</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 animate-pulse">
                                    Analyzing Your Doubt...
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">
                                    Our AI tutor is preparing your explanation.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="h-4 bg-slate-100 dark:bg-slate-700 rounded-full w-3/4 animate-pulse"></div>
                                <div className="h-3 bg-slate-50 dark:bg-slate-700/50 rounded-full w-full animate-pulse"></div>
                                <div className="h-3 bg-slate-50 dark:bg-slate-700/50 rounded-full w-[90%] animate-pulse"></div>
                            </div>
                        </div>
                    )}

                    {/* Solution Output */}
                    {solution && !isLoading && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {/* Success Header */}
                            <div className="flex justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400">
                                        ✅
                                    </span>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white">Doubt Solved!</h4>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">Powered by AI</p>
                                    </div>
                                </div>
                            </div>

                            {/* Solution Content */}
                            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 space-y-8">
                                {/* Explanation */}
                                <section>
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                                            Explanation
                                        </span>
                                    </div>
                                    <div className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
                                        {solution.explanation}
                                    </div>
                                </section>

                                {/* Example */}
                                <section className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 uppercase tracking-wider">
                                            Example
                                        </span>
                                    </div>
                                    <div className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
                                        {solution.example}
                                    </div>
                                </section>

                                {/* Exam Tip */}
                                <section className="bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-xl">💡</span>
                                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 uppercase tracking-wider">
                                            Exam Tip
                                        </span>
                                    </div>
                                    <div className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium whitespace-pre-wrap">
                                        {solution.examTip}
                                    </div>
                                </section>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <p className="mt-12 text-center text-slate-400 text-xs">
                    Built with ❤️ for Indian Engineering Students. <br />
                    UniPilot AI Doubt Solver v1.0
                </p>
            </main>
        </div>
    );
}
