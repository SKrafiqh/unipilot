import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AiNotesForm from '../components/AiNotesForm';
import AiNotesOutput from '../components/AiNotesOutput';
import { generateDemoNotes } from '../utils/demoNotesGenerator';
import ThemeToggle from '../components/ThemeToggle';
import { AIIcon } from '../components/Illustrations';

export default function AiNotes() {
    const navigate = useNavigate();
    const [isGenerating, setIsGenerating] = useState(false);
    const [notes, setNotes] = useState(null);
    const [usageCount, setUsageCount] = useState(0);
    const [showLimitMessage, setShowLimitMessage] = useState(false);

    useEffect(() => {
        const savedCount = sessionStorage.getItem('ai_notes_usage_count');
        if (savedCount) {
            setUsageCount(parseInt(savedCount, 10));
        }
    }, []);

    const handleGenerate = async (formData) => {
        if (usageCount >= 2) {
            setShowLimitMessage(true);
            return;
        }

        setIsGenerating(true);
        setNotes(null);

        try {
            const generatedNotes = await generateDemoNotes(
                formData.subject,
                formData.unit,
                formData.topic,
                formData.difficulty
            );
            setNotes(generatedNotes);

            const newCount = usageCount + 1;
            setUsageCount(newCount);
            sessionStorage.setItem('ai_notes_usage_count', newCount.toString());
        } catch (error) {
            console.error('Error generating notes:', error);
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
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-bold mb-4 border border-indigo-100 dark:border-indigo-800">
                        <AIIcon className="w-4 h-4" /> AI BETA
                    </div>
                    <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
                        AI Notes Generator
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        Generate high-quality, exam-oriented engineering notes in seconds.
                        <span className="block mt-1 font-medium text-indigo-500">Demo mode – real AI coming soon!</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {/* Usage Limit Banner */}
                    {showLimitMessage && (
                        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-4 rounded-xl flex items-center gap-4 animate-in fade-in zoom-in duration-300">
                            <span className="text-2xl">⚠️</span>
                            <div>
                                <h4 className="font-bold text-amber-800 dark:text-amber-400 uppercase text-xs tracking-wider mb-1">Session Limit Reached</h4>
                                <p className="text-sm text-amber-700 dark:text-amber-300">
                                    You've reached the demo limit (2 generations). <strong>Login to unlock unlimited AI notes</strong> and access advanced features.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Form Section */}
                    <AiNotesForm
                        onGenerate={handleGenerate}
                        isGenerating={isGenerating}
                        disabled={usageCount >= 2}
                    />

                    {/* Output Section */}
                    <AiNotesOutput notes={notes} isGenerating={isGenerating} />
                </div>

                {/* Footer info */}
                <p className="mt-12 text-center text-slate-400 text-xs">
                    Built with ❤️ for Indian Engineering Students. <br />
                    UniPilot AI v0.1 (Demo)
                </p>
            </main>
        </div>
    );
}
