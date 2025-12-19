import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import AiNotesForm from '../components/AiNotesForm';
import AiNotesOutput from '../components/AiNotesOutput';
import { generateAINotes } from '../services/aiNotesService';
import ThemeToggle from '../components/ThemeToggle';
import { AIIcon } from '../components/Illustrations';

export default function AiNotes() {
    const navigate = useNavigate();
    const [isGenerating, setIsGenerating] = useState(false);
    const [notes, setNotes] = useState(null);
    const [usageCount, setUsageCount] = useState(0);
    const [showLimitMessage, setShowLimitMessage] = useState(false);
    const [aiSource, setAiSource] = useState(null); // 'ai' | 'demo'
    const [errorMessage, setErrorMessage] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedCount = sessionStorage.getItem('ai_notes_usage_count');
        if (savedCount) {
            setUsageCount(parseInt(savedCount, 10));
        }

        // Check auth state
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleGenerate = async (formData) => {
        // Reset states
        setErrorMessage(null);
        setShowLimitMessage(false);
        setIsGenerating(true);
        setNotes(null);
        setAiSource(null);

        try {
            const result = await generateAINotes({
                subject: formData.subject,
                unit: formData.unit,
                topic: formData.topic,
                difficulty: formData.difficulty,
                userId: user?.uid || null,
                isLoggedIn: !!user,
            });

            if (result.isRateLimited) {
                setShowLimitMessage(true);
                setErrorMessage(result.message);
                return;
            }

            if (!result.success) {
                setErrorMessage(result.message || 'Failed to generate notes.');
                return;
            }

            setNotes(result.notes);
            setAiSource(result.source);

            // Update usage count
            const newCount = usageCount + 1;
            setUsageCount(newCount);
            sessionStorage.setItem('ai_notes_usage_count', newCount.toString());

        } catch (error) {
            console.error('Error generating notes:', error);
            setErrorMessage('An unexpected error occurred. Please try again.');
        } finally {
            setIsGenerating(false);
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
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-xs font-bold mb-4 shadow-lg">
                        <AIIcon className="w-4 h-4" /> AI POWERED
                    </div>
                    <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
                        AI Notes Generator
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        Generate high-quality, exam-oriented engineering notes powered by AI.
                        {!user && (
                            <span className="block mt-1 font-medium text-indigo-500">
                                Demo users: 2 generations/day • Login for more!
                            </span>
                        )}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {/* AI Source Banner */}
                    {aiSource === 'demo' && notes && (
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-xl flex items-center gap-4">
                            <span className="text-2xl">ℹ️</span>
                            <div>
                                <h4 className="font-bold text-blue-800 dark:text-blue-400 uppercase text-xs tracking-wider mb-1">Demo Mode Active</h4>
                                <p className="text-sm text-blue-700 dark:text-blue-300">
                                    AI service temporarily unavailable. Showing demo notes.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Error Message */}
                    {errorMessage && !showLimitMessage && (
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-xl flex items-center gap-4 animate-in fade-in zoom-in duration-300">
                            <span className="text-2xl">❌</span>
                            <div>
                                <h4 className="font-bold text-red-800 dark:text-red-400 uppercase text-xs tracking-wider mb-1">Error</h4>
                                <p className="text-sm text-red-700 dark:text-red-300">{errorMessage}</p>
                            </div>
                        </div>
                    )}

                    {/* Usage Limit Banner */}
                    {showLimitMessage && (
                        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-4 rounded-xl flex items-center gap-4 animate-in fade-in zoom-in duration-300">
                            <span className="text-2xl">⚠️</span>
                            <div>
                                <h4 className="font-bold text-amber-800 dark:text-amber-400 uppercase text-xs tracking-wider mb-1">
                                    {user ? 'Daily Limit Reached' : 'Demo Limit Reached'}
                                </h4>
                                <p className="text-sm text-amber-700 dark:text-amber-300">
                                    {user
                                        ? 'You have reached your daily limit. Please try again tomorrow.'
                                        : <>You've reached the demo limit (2/day). <strong>Login to unlock more AI generations</strong> and access advanced features.</>
                                    }
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Form Section */}
                    <AiNotesForm
                        onGenerate={handleGenerate}
                        isGenerating={isGenerating}
                        disabled={showLimitMessage}
                    />

                    {/* Output Section */}
                    <AiNotesOutput notes={notes} isGenerating={isGenerating} />
                </div>

                {/* Footer info */}
                <p className="mt-12 text-center text-slate-400 text-xs">
                    Built with ❤️ for Indian Engineering Students. <br />
                    UniPilot AI v1.0 {aiSource === 'ai' ? '(Powered by Gemini)' : ''}
                </p>
            </main>
        </div>
    );
}
