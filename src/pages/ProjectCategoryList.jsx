
import { Link, useNavigate } from 'react-router-dom';
import projectsData from '../data/projectsData.json';

export default function ProjectCategoryList() {
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
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Mini Projects</h1>
                    <span className="hidden md:block h-8 w-px bg-slate-200 dark:bg-slate-700"></span>
                    <p className="text-lg text-slate-500 dark:text-slate-400">
                        Build your portfolio with real-world problem statements.
                    </p>
                </div>
            </div>

            {/* Categories Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((category) => (
                    <Link
                        to={`/projects/${category.id}`}
                        key={category.id}
                        className="group relative flex flex-col h-full hover:-translate-y-1 transition-transform duration-300"
                    >
                        <div className="h-full bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 shadow-sm hover:shadow-xl transition-all relative overflow-hidden">
                            {/* Background accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-slate-50 dark:to-slate-700/50 rounded-bl-full opacity-50 transition-opacity group-hover:opacity-100"></div>

                            <div
                                className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center text-3xl shadow-sm relative z-10"
                                style={{ backgroundColor: category.color ? `${category.color}30` : '#eff6ff', color: category.color || '#3b82f6' }}
                            >
                                {category.id === 'dbms' ? '🗄️' : category.id === 'aiml' ? '🤖' : '🌐'}
                            </div>

                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">
                                {category.category}
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8 relative z-10">
                                {category.description}
                            </p>

                            <div className="mt-auto flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold group-hover:gap-3 transition-all relative z-10">
                                View {category.projects.length} Projects <span>→</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
