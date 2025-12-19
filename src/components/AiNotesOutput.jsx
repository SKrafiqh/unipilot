import React, { useState } from 'react';

export default function AiNotesOutput({ notes, isGenerating }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const textToCopy = `
# AI Generated Notes

## Introduction
${notes.introduction}

## Detailed Explanation
${notes.explanation}

## Examples
${notes.examples}

## Diagram Description
${notes.diagramDescription}

## Exam Oriented Notes
${notes.examPoints}
    `.trim();

        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (isGenerating) {
        return (
            <div className="card-base p-8 bg-white dark:bg-slate-800 min-h-[400px]">
                <div className="flex flex-col items-center justify-center mb-8">
                    <div className="relative mb-4">
                        <div className="w-16 h-16 border-4 border-indigo-100 dark:border-slate-700 border-t-indigo-600 rounded-full animate-spin"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-xl">✨</span>
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 animate-pulse">
                        Synthesizing Knowledge...
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                        Our AI is researching and structuring the best notes for you.
                    </p>
                </div>

                {/* Skeleton Shimmers */}
                <div className="space-y-6">
                    <div className="h-4 bg-slate-100 dark:bg-slate-700 rounded-full w-3/4 animate-pulse"></div>
                    <div className="space-y-3">
                        <div className="h-3 bg-slate-50 dark:bg-slate-700/50 rounded-full w-full animate-pulse"></div>
                        <div className="h-3 bg-slate-50 dark:bg-slate-700/50 rounded-full w-[90%] animate-pulse"></div>
                        <div className="h-3 bg-slate-50 dark:bg-slate-700/50 rounded-full w-[95%] animate-pulse"></div>
                    </div>
                    <div className="h-4 bg-slate-100 dark:bg-slate-700 rounded-full w-1/2 animate-pulse"></div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="h-20 bg-slate-50 dark:bg-slate-700/50 rounded-xl animate-pulse"></div>
                        <div className="h-20 bg-slate-50 dark:bg-slate-700/50 rounded-xl animate-pulse"></div>
                    </div>
                </div>
            </div>
        );
    }

    if (!notes) return null;

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400">
                        ✅
                    </span>
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">Generation Complete</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">View your structured notes below</p>
                    </div>
                </div>
                <button
                    onClick={handleCopy}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${copied
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'
                        : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-900/50'
                        }`}
                >
                    {copied ? 'Copied! ✨' : 'Copy All'}
                </button>
            </div>

            <div className="card-base bg-white dark:bg-slate-800 p-8 space-y-10 prose prose-slate dark:prose-invert max-w-none">
                <section>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 uppercase tracking-wider">Introduction</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
                        {notes.introduction}
                    </p>
                </section>

                <section>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 uppercase tracking-wider">Detailed Explanation</span>
                    </div>
                    <div className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
                        {notes.explanation}
                    </div>
                </section>

                <section>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 uppercase tracking-wider">Examples</span>
                    </div>
                    <div className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
                        {notes.examples}
                    </div>
                </section>

                <section className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 uppercase tracking-wider">Diagram Description</span>
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 italic text-sm leading-relaxed whitespace-pre-wrap">
                        {notes.diagramDescription}
                    </div>
                </section>

                <section className="border-t border-slate-100 dark:border-slate-700 pt-8">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 dark:bg-rose-900 text-rose-700 dark:text-rose-300 uppercase tracking-wider">Exam Oriented Notes</span>
                    </div>
                    <div className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
                        {notes.examPoints}
                    </div>
                </section>
            </div>
        </div>
    );
}
