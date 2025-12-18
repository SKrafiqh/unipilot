
import { Link, useNavigate } from 'react-router-dom';
import roadmapsData from '../data/roadmapsData.json';

export default function RoadmapList() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-200 font-sans p-6 md:p-12">

            {/* Header */}
            <div className="max-w-7xl mx-auto mb-10 text-center md:text-left">
                <button
                    onClick={() => navigate('/dashboard')}
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium flex items-center gap-2 mb-4 transition-colors"
                >
                    <span>←</span> Back to Dashboard
                </button>
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Career Roadmaps</h1>
                    <span className="hidden md:block h-8 w-px bg-slate-200 dark:bg-slate-700"></span>
                    <p className="text-lg text-slate-500 dark:text-slate-400">
                        Step-by-step guides to master in-demand skills.
                    </p>
                </div>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {roadmapsData.map((roadmap) => (
                    <Link
                        to={`/roadmaps/${roadmap.id}`}
                        key={roadmap.id}
                        className="group relative flex flex-col h-full hover:-translate-y-1 transition-transform duration-200"
                    >
                        <div className="h-full bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-lg hover:border-violet-300 dark:hover:border-violet-500/50 transition-all flex flex-col">

                            {/* Color Bar */}
                            <div className="absolute top-0 inset-x-0 h-1 rounded-t-xl bg-gradient-to-r from-transparent via-current to-transparent opacity-50" style={{ color: roadmap.color || '#8b5cf6' }}></div>

                            <div className="flex items-start justify-between mb-4">
                                <div
                                    className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                                    style={{ backgroundColor: roadmap.color ? `${roadmap.color}20` : '#f3e8ff', color: roadmap.color || '#8b5cf6' }}
                                >
                                    🗺️
                                </div>
                                <span className="text-xs font-bold px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded uppercase tracking-wide">
                                    {roadmap.weeks.length} Weeks
                                </span>
                            </div>

                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                {roadmap.title}
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                {roadmap.description}
                            </p>

                            <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400 font-bold text-sm group-hover:gap-3 transition-all mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
                                Start Learning Path <span>→</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
