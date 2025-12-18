
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getActivities, clearActivities } from '../utils/activityLogger';
import { EmptyStateIllustration } from '../components/Illustrations';

export default function ActivityLog() {
    const navigate = useNavigate();
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        setActivities(getActivities());
    }, []);

    const handleClear = () => {
        if (confirm('Are you sure you want to clear your history?')) {
            clearActivities();
            setActivities([]);
        }
    };

    const getIcon = (type) => {
        switch (type) {
            case 'login': return '🔑';
            case 'note': return '📚';
            case 'project': return '💻';
            case 'roadmap': return '🗺️';
            case 'ai': return '🤖';
            default: return '📌';
        }
    };

    const formatTime = (isoString) => {
        const date = new Date(isoString);
        const now = new Date();
        const diffInSeconds = Math.floor((now - date) / 1000);

        if (diffInSeconds < 60) return 'Just now';
        if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} mins ago`;
        if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
        return date.toLocaleDateString();
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-200 font-sans p-6 md:p-12">

            {/* Header */}
            <div className="max-w-3xl mx-auto mb-8 flex items-center justify-between">
                <div>
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium flex items-center gap-2 mb-2"
                    >
                        ← Back to Dashboard
                    </button>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                        Activity Log
                    </h1>
                </div>

                {activities.length > 0 && (
                    <button
                        onClick={handleClear}
                        className="text-sm font-medium text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 bg-red-50 dark:bg-red-900/20 px-4 py-2 rounded-lg transition-colors"
                    >
                        Clear History
                    </button>
                )}
            </div>

            {/* Activity Timeline */}
            <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                {activities.length === 0 ? (
                    <div className="p-12 text-center text-slate-500 dark:text-slate-400 flex flex-col items-center">
                        <EmptyStateIllustration className="w-24 h-24 text-slate-300 dark:text-slate-600 mb-6" />
                        <p className="text-lg font-medium text-slate-700 dark:text-slate-300">No activity recorded yet</p>
                        <p className="text-sm mt-1 max-w-sm">
                            Your learning journey timeline will appear here. Start exploring modules to see your history.
                        </p>
                    </div>
                ) : (
                    <div className="divide-y divide-slate-100 dark:divide-slate-700">
                        {activities.map((log) => (
                            <div key={log.id} className="p-4 sm:p-6 flex gap-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-xl">
                                    {getIcon(log.type)}
                                </div>
                                <div className="flex-grow">
                                    <p className="text-slate-900 dark:text-white font-medium text-sm sm:text-base">
                                        {log.description}
                                    </p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                        {formatTime(log.timestamp)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
}
