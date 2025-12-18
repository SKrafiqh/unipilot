
import { Link, useNavigate } from 'react-router-dom';
import notesData from "../data/notesData";



export default function NotesList() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-200 font-sans p-6 md:p-12">

            {/* Header */}
            <div className="max-w-7xl mx-auto mb-8">
                <button
                    onClick={() => navigate('/dashboard')}
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium flex items-center gap-2 mb-2 transition-colors"
                >
                    <span>←</span> Back to Dashboard
                </button>
                <div className="flex items-center gap-3">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Notes & Exam Prep</h1>
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold px-2 py-1 rounded-full border border-blue-200 dark:border-blue-800 uppercase tracking-wide">
                        Core Subjects
                    </span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-2xl">
                    Concise study materials, important topics, and unit-wise breakdowns for your semester exams.
                </p>
            </div>

            {/* Grid of Subject Cards */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {notesData.map((subject) => (
                    <Link
                        to={`/notes/${subject.id}`}
                        key={subject.id}
                        className="group relative flex flex-col h-full active:scale-[0.98] transition-all duration-200"
                    >
                        <div className="h-full bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-500/50 transition-all">
                            {/* Color accent */}
                            <div
                                className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-2xl shadow-sm"
                                style={{ backgroundColor: subject.color ? `${subject.color}20` : '#eff6ff', color: subject.color || '#3b82f6' }}
                            >
                                📚
                            </div>

                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {subject.title}
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                {subject.description}
                            </p>

                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
                                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                    {subject.units?.length || 0} Units
                                </span>
                                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Start Reading <span>→</span>
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
