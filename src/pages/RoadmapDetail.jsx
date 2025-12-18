
import { useEffect, useState } from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import roadmapsData from '../data/roadmapsData.json';

export default function RoadmapDetail() {
    const { roadmapId } = useParams();
    const navigate = useNavigate();
    const roadmap = roadmapsData.find(r => r.id === roadmapId);

    // State for storing checked tasks: { "weekIndex-taskIndex": true/false }
    const [progress, setProgress] = useState({});

    // Initialize progress from localStorage
    useEffect(() => {
        if (roadmapId) {
            const savedProgress = localStorage.getItem(`roadmap_progress_${roadmapId}`);
            if (savedProgress) {
                setProgress(JSON.parse(savedProgress));
            }
        }
    }, [roadmapId]);

    if (!roadmap) {
        return <Navigate to="/roadmaps" replace />;
    }

    const handleToggleTask = (weekIndex, taskIndex) => {
        const key = `${weekIndex}-${taskIndex}`;
        const newProgress = {
            ...progress,
            [key]: !progress[key] // toggle
        };

        setProgress(newProgress);
        localStorage.setItem(`roadmap_progress_${roadmapId}`, JSON.stringify(newProgress));
    };

    // Calculate generic progress
    const totalTasks = roadmap.weeks.reduce((acc, week) => acc + week.tasks.length, 0);
    const completedCount = Object.values(progress).filter(Boolean).length;
    const percentage = totalTasks === 0 ? 0 : Math.round((completedCount / totalTasks) * 100);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-200 font-sans p-6 md:p-12">
            <div className="max-w-3xl mx-auto">

                {/* Nav */}
                <div className="mb-6">
                    <button
                        onClick={() => navigate('/roadmaps')}
                        className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 text-sm font-medium flex items-center gap-2 mb-4 transition-colors"
                    >
                        <span>←</span> Back to Roadmaps
                    </button>

                    <div className="flex items-start justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{roadmap.title}</h1>
                            <p className="text-slate-500 dark:text-slate-400">{roadmap.description}</p>
                        </div>
                        <div className="hidden sm:block text-5xl opacity-20 filter grayscale">
                            🗺️
                        </div>
                    </div>
                </div>

                {/* Sticky Progress Bar */}
                <div className="sticky top-4 z-20 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg mb-8 transition-all">
                    <div className="flex justify-between items-end mb-2">
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Your Progress</span>
                        <span className="text-xl font-bold text-violet-600 dark:text-violet-400">{percentage}%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                        <div
                            className="bg-violet-600 h-3 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${percentage}%` }}
                        ></div>
                    </div>
                </div>

                {/* Timeline / Weeks */}
                <div className="space-y-6 relative">
                    {/* Vertical Line for timeline effect (optional, removed for cleaner look, sticking to cards) */}

                    {roadmap.weeks.map((week, wIndex) => (
                        <div key={wIndex} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
                            <div className="px-6 py-4 bg-slate-50/50 dark:bg-slate-700/30 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
                                <h3 className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300 text-xs">{wIndex + 1}</span>
                                    {week.title}
                                </h3>
                                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Week {wIndex + 1}</span>
                            </div>

                            <div className="p-2">
                                {week.tasks.map((task, tIndex) => {
                                    const isChecked = !!progress[`${wIndex}-${tIndex}`];
                                    return (
                                        <label
                                            key={tIndex}
                                            className={`flex items-start gap-4 p-3 rounded-lg cursor-pointer transition-all duration-200 ${isChecked ? 'bg-slate-50 dark:bg-slate-900/30' : 'hover:bg-slate-50 dark:hover:bg-slate-700/50'}`}
                                        >
                                            <div className="relative flex items-center mt-0.5">
                                                <input
                                                    type="checkbox"
                                                    checked={isChecked}
                                                    onChange={() => handleToggleTask(wIndex, tIndex)}
                                                    className="peer w-5 h-5 border-2 border-slate-300 dark:border-slate-500 rounded text-violet-600 focus:ring-violet-500 transition-all cursor-pointer appearance-none checked:bg-violet-600 checked:border-violet-600"
                                                />
                                                <svg
                                                    className="absolute w-3.5 h-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 left-1 top-1 transition-opacity"
                                                    viewBox="0 0 14 14"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M3 8L6 11L11 3.5"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </div>
                                            <span className={`text-sm sm:text-base transition-colors ${isChecked ? 'text-slate-400 line-through decoration-slate-300' : 'text-slate-700 dark:text-slate-200'}`}>
                                                {task}
                                            </span>
                                        </label>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {percentage === 100 && (
                    <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center animate-bounce-short">
                        <div className="text-4xl mb-2">🎉</div>
                        <h2 className="text-xl font-bold text-green-800 dark:text-green-300 mb-1">Congratulations!</h2>
                        <p className="text-green-700 dark:text-green-400">You've completed the {roadmap.title} roadmap.</p>
                    </div>
                )}

            </div>
        </div>
    );
}
