
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import projectsData from '../data/projectsData.json';

export default function ProjectList() {
    const { categoryId } = useParams();
    const navigate = useNavigate();
    const category = projectsData.find(c => c.id === categoryId);

    if (!category) {
        return <Navigate to="/projects" replace />;
    }

    const getDifficultyColor = (diff) => {
        switch (diff.toLowerCase()) {
            case 'easy': return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800';
            case 'medium': return 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-200 dark:border-amber-800';
            case 'hard': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200 dark:border-red-800';
            default: return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300';
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-200 font-sans p-6 md:p-12">

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-10">
                    <button
                        onClick={() => navigate('/projects')}
                        className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 text-sm font-medium flex items-center gap-2 mb-4 transition-colors"
                    >
                        <span>←</span> Back to Categories
                    </button>
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                        {category.category} <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
                    </h1>
                    <p className="text-lg text-slate-500 dark:text-slate-400">
                        Select a problem statement to start building.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.projects.map((project) => (
                        <Link
                            to={`/projects/${categoryId}/${project.id}`}
                            key={project.id}
                            className="group flex flex-col h-full"
                        >
                            <div className="h-full bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all duration-200">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg text-2xl">
                                        🚀
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border ${getDifficultyColor(project.difficulty)}`}>
                                        {project.difficulty}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    {project.title}
                                </h3>

                                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium rounded border border-slate-200 dark:border-slate-600">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                        View Details
                                    </span>
                                    <span className="text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
                                        →
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
