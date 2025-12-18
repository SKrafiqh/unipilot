
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import Markdown from 'react-markdown';
import notesData from "../data/notesData";

import { useState } from 'react';

export default function SubjectDetail() {
    const { subjectId } = useParams();
    const navigate = useNavigate();
    const subject = notesData.find(s => s.id === subjectId);
    const [expandedTopics, setExpandedTopics] = useState({});

    if (!subject) {
        return <Navigate to="/notes" replace />;
    }

    const toggleTopic = (unitIndex, topicIndex) => {
        const key = `${unitIndex}-${topicIndex}`;
        setExpandedTopics(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-200 font-sans p-6 md:p-12">

            <div className="max-w-4xl mx-auto">
                {/* Header & Nav */}
                <div className="mb-8">
                    <button
                        onClick={() => navigate('/notes')}
                        className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 text-sm font-medium flex items-center gap-2 mb-4 transition-colors"
                    >
                        <span>←</span> Back to Subjects
                    </button>

                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: subject.color || '#3b82f6' }}></div>
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">{subject.title}</h1>
                        <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">{subject.description}</p>
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-400 uppercase tracking-wider">
                            <span>Last updated: {subject.lastUpdated}</span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                    {subject.units.map((unit, uIndex) => (
                        <div key={uIndex} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                            <div className="px-6 py-4 bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
                                <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100">
                                    <span className="text-indigo-500 mr-2">Unit {uIndex + 1}:</span> {unit.title}
                                </h2>
                            </div>

                            <div className="divide-y divide-slate-100 dark:divide-slate-700">
                                {unit.topics.map((topic, tIndex) => {
                                    const isExpanded = expandedTopics[`${uIndex}-${tIndex}`];
                                    return (
                                        <div key={tIndex} className="group transition-colors hover:bg-slate-50 dark:hover:bg-slate-700/30">
                                            <button
                                                onClick={() => toggleTopic(uIndex, tIndex)}
                                                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                                            >
                                                <h3 className={`text-base font-medium transition-colors ${isExpanded ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-700 dark:text-slate-300'}`}>
                                                    {topic.title}
                                                </h3>
                                                <span className={`text-slate-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                                                    ▼
                                                </span>
                                            </button>

                                            {isExpanded && (
                                                <div className="px-6 pb-6 pt-2">
                                                    <div className="prose prose-slate dark:prose-invert max-w-none bg-slate-50 dark:bg-slate-900/50 p-6 rounded-lg border border-slate-100 dark:border-slate-700/50">
                                                        <Markdown
                                                            components={{
                                                                code({ node, inline, className, children, ...props }) {
                                                                    return (
                                                                        <code className={`${className} bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded text-sm font-mono text-pink-600 dark:text-pink-400`} {...props}>
                                                                            {children}
                                                                        </code>
                                                                    )
                                                                },
                                                                pre({ node, children, ...props }) {
                                                                    return (
                                                                        <pre className="bg-slate-800 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm my-4 border border-slate-700" {...props}>
                                                                            {children}
                                                                        </pre>
                                                                    )
                                                                },
                                                                h1: ({ children }) => <h1 className="text-2xl font-bold mb-4 mt-6 first:mt-0 text-slate-900 dark:text-white border-b pb-2 border-slate-200 dark:border-slate-700">{children}</h1>,
                                                                h2: ({ children }) => <h2 className="text-xl font-bold mb-3 mt-5 text-slate-800 dark:text-slate-100">{children}</h2>,
                                                                h3: ({ children }) => <h3 className="text-lg font-bold mb-2 mt-4 text-slate-800 dark:text-slate-100">{children}</h3>,
                                                                p: ({ children }) => <p className="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">{children}</p>,
                                                                ul: ({ children }) => <ul className="list-disc pl-5 mb-4 space-y-1 text-slate-600 dark:text-slate-300">{children}</ul>,
                                                                ol: ({ children }) => <ol className="list-decimal pl-5 mb-4 space-y-1 text-slate-600 dark:text-slate-300">{children}</ol>,
                                                                strong: ({ children }) => <strong className="font-bold text-slate-900 dark:text-slate-100">{children}</strong>,
                                                                blockquote: ({ children }) => <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-slate-500 dark:text-slate-400 my-4 bg-white dark:bg-slate-800 py-1">{children}</blockquote>,
                                                            }}
                                                        >
                                                            {topic.content}
                                                        </Markdown>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
