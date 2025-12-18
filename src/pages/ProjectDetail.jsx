
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import projectsData from '../data/projectsData.json';
import { PremiumLock } from '../components/PremiumLock';

export default function ProjectDetail() {
    const { categoryId, projectId } = useParams();
    const navigate = useNavigate();
    const category = projectsData.find(c => c.id === categoryId);
    const project = category?.projects.find(p => p.id === projectId);

    if (!category || !project) {
        return <Navigate to="/projects" replace />;
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-200 font-sans p-6 md:p-12">
            <div className="max-w-4xl mx-auto">

                {/* Nav */}
                <div className="mb-8">
                    <button
                        onClick={() => navigate(`/projects/${categoryId}`)}
                        className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 text-sm font-medium flex items-center gap-2 mb-4 transition-colors"
                    >
                        <span>←</span> Back to {category.category}
                    </button>

                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                                {project.title}
                            </h1>
                            <span className={`px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 self-start md:self-auto`}>
                                {project.difficulty}
                            </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, i) => (
                                <span key={i} className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium rounded-lg border border-indigo-100 dark:border-indigo-800">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">

                        <section className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                <span className="text-indigo-500">🎯</span> Problem Statement
                            </h2>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                                {project.problemStatement}
                            </p>
                        </section>

                        <section className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                <span className="text-indigo-500">✨</span> Key Features
                            </h2>
                            <ul className="space-y-3">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <section className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-xl border border-amber-100 dark:border-amber-800/50">
                            <h2 className="text-lg font-bold text-amber-800 dark:text-amber-200 mb-3 border-b border-amber-200 dark:border-amber-800 pb-2">
                                Submission Guidelines
                            </h2>
                            <p className="text-sm text-amber-900/80 dark:text-amber-100/70 leading-relaxed">
                                {project.submissionGuidelines}
                            </p>
                        </section>

                        {/* Premium Section */}
                        <PremiumLock>
                            <div className="p-6 bg-slate-800 rounded-xl text-white shadow-xl border border-slate-700">
                                <h3 className="text-lg font-bold mb-4 text-emerald-400 flex items-center gap-2">
                                    <span>✅</span> Solution Unlocked!
                                </h3>
                                <div className="space-y-3">
                                    <button className="w-full flex items-center gap-3 p-3 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors text-left border border-slate-600/50 hover:border-slate-500">
                                        <span className="text-2xl">📁</span>
                                        <div>
                                            <div className="font-semibold text-sm">Source Code</div>
                                            <div className="text-xs text-slate-400">ZIP • 12 MB</div>
                                        </div>
                                    </button>
                                    <button className="w-full flex items-center gap-3 p-3 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors text-left border border-slate-600/50 hover:border-slate-500">
                                        <span className="text-2xl">📄</span>
                                        <div>
                                            <div className="font-semibold text-sm">Project Report</div>
                                            <div className="text-xs text-slate-400">PDF • 2.5 MB</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </PremiumLock>
                    </div>
                </div>

            </div>
        </div>
    );
}
