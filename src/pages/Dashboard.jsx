
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import ThemeToggle from '../components/ThemeToggle';
import { NotesIcon, ProjectsIcon, RoadmapsIcon, AIIcon } from '../components/Illustrations';

export default function Dashboard() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                const stored = localStorage.getItem('user_data');
                if (stored) setUser(JSON.parse(stored));
                else navigate('/login');
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem('user_data');
            navigate('/login');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 text-slate-400">
            <div className="animate-pulse">Loading UniPilot...</div>
        </div>
    );

    const emailPrefix = user?.email ? user.email.split('@')[0] : 'Student';
    const cleanName = emailPrefix.charAt(0).toUpperCase() + emailPrefix.slice(1);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans transition-colors duration-200 page-wrapper">
            {/* Top Navigation */}
            <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
                    <div className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
                        <span className="text-2xl">🎓</span> UniPilot
                    </div>
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <button
                            onClick={handleLogout}
                            className="text-sm font-medium text-slate-500 hover:text-red-500 dark:text-slate-400 dark:hover:text-red-400 transition-colors"
                        >
                            Sign Out
                        </button>
                        <div className="hidden sm:flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 font-bold text-xs uppercase border border-indigo-200 dark:border-indigo-700">
                            {cleanName.charAt(0)}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                {/* Header Section */}
                <div className="mb-10">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                        Welcome back, {cleanName} 👋
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-lg">
                        Ready to accelerate your learning journey today?
                    </p>
                </div>

                {/* Modules Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">



                    {/* Notes Card */}
                    <div className="card-base card-hover group relative overflow-hidden cursor-pointer" onClick={() => navigate('/notes')}>
                        <div className="h-2 w-full bg-blue-500 absolute top-0 left-0"></div>
                        <div className="p-6 pt-8">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                                <NotesIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                Notes & Prep
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                                Access concise, exam-ready notes for core engineering subjects.
                            </p>
                            <span
                                className="w-full inline-block text-center rounded-lg bg-blue-50 dark:bg-blue-900/20 py-2.5 text-sm font-semibold text-blue-600 dark:text-blue-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors"
                            >
                                Start Revising
                            </span>
                        </div>
                    </div>

                    {/* Projects Card */}
                    <div className="card-base card-hover group relative overflow-hidden cursor-pointer" onClick={() => navigate('/projects')}>
                        <div className="h-2 w-full bg-pink-500 absolute top-0 left-0"></div>
                        <div className="p-6 pt-8">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 group-hover:scale-110 transition-transform duration-300">
                                <ProjectsIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                                Mini Projects
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                                Build your portfolio with practical, resume-worthy project ideas.
                            </p>
                            <span
                                className="w-full inline-block text-center rounded-lg bg-pink-50 dark:bg-pink-900/20 py-2.5 text-sm font-semibold text-pink-600 dark:text-pink-300 group-hover:bg-pink-100 dark:group-hover:bg-pink-900/40 transition-colors"
                            >
                                Browse Projects
                            </span>
                        </div>
                    </div>

                    {/* Roadmaps Card */}
                    <div className="card-base card-hover group relative overflow-hidden cursor-pointer" onClick={() => navigate('/roadmaps')}>
                        <div className="h-2 w-full bg-violet-500 absolute top-0 left-0"></div>
                        <div className="p-6 pt-8">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform duration-300">
                                <RoadmapsIcon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                Career Paths
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                                Step-by-step guides for Internships, Placements, and Skill mastery.
                            </p>
                            <span
                                className="w-full inline-block text-center rounded-lg bg-violet-50 dark:bg-violet-900/20 py-2.5 text-sm font-semibold text-violet-600 dark:text-violet-300 group-hover:bg-violet-100 dark:group-hover:bg-violet-900/40 transition-colors"
                            >
                                View Roadmaps
                            </span>
                        </div>
                    </div>

                    {/* AI Tools Card */}
                    <div className="card-base card-hover group relative overflow-hidden cursor-pointer" onClick={() => navigate('/ai-notes')}>
                        <div className="h-2 w-full bg-emerald-500 absolute top-0 left-0"></div>
                        <div className="p-6 pt-8">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                                <AIIcon className="w-6 h-6" />
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                    AI Notes Gen
                                </h3>
                                <span className="rounded-full bg-emerald-100 dark:bg-emerald-900 text-xs font-bold text-emerald-700 dark:text-emerald-300 px-2 py-0.5 animate-pulse">
                                    BETA
                                </span>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                                Generate detailed, exam-oriented engineering notes instantly with AI.
                            </p>
                            <span
                                className="w-full inline-block text-center rounded-lg bg-emerald-50 dark:bg-emerald-900/20 py-2.5 text-sm font-semibold text-emerald-600 dark:text-emerald-300 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/40 transition-colors"
                            >
                                Generate AI Notes
                            </span>
                        </div>
                    </div>

                </div>

                {/* Bottom Section: Progress / Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-indigo-900 to-indigo-800 rounded-xl p-8 text-white relative overflow-hidden shadow-lg">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-2">Keep the streak alive! 🔥</h3>
                            <p className="text-indigo-200 mb-6 max-w-lg">
                                Consistency is key. You've accessed UniPilot for <strong>3 days</strong> in a row. Complete a module today to maintain your progress.
                            </p>
                            <button
                                onClick={() => navigate('/activity')}
                                className="bg-white text-indigo-900 px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-indigo-50 transition-colors"
                            >
                                View Activity Log
                            </button>
                        </div>
                        <div className="absolute right-0 bottom-0 opacity-10 text-9xl transform translate-x-10 translate-y-10">
                            🏆
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-4">Quick Stats</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50">
                                <span className="text-sm text-slate-600 dark:text-slate-400">Projects Started</span>
                                <span className="font-bold text-slate-900 dark:text-white">1</span>
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50">
                                <span className="text-sm text-slate-600 dark:text-slate-400">Roadmaps Active</span>
                                <span className="font-bold text-slate-900 dark:text-white">2</span>
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50">
                                <span className="text-sm text-slate-600 dark:text-slate-400">Topics Mastered</span>
                                <span className="font-bold text-slate-900 dark:text-white">12</span>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}
