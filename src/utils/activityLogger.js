
/**
 * Utility to manage user activity logs in localStorage.
 * Since we don't have a backend, we perform all operations on the client side.
 */

const STORAGE_KEY = 'user_activity_log';
const MAX_LOGS = 50; // Keep only the last 50 activities

export const logActivity = (type, description) => {
    try {
        const existingLogs = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

        const newLog = {
            id: Date.now().toString(),
            type, // 'login', 'note', 'project', 'roadmap', 'ai'
            description,
            timestamp: new Date().toISOString()
        };

        // Add new log to the beginning and trim to MAX_LOGS
        const updatedLogs = [newLog, ...existingLogs].slice(0, MAX_LOGS);

        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedLogs));
    } catch (error) {
        console.error('Failed to log activity:', error);
    }
};

export const getActivities = () => {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch (error) {
        console.error('Failed to retrieve activities:', error);
        return [];
    }
};

export const clearActivities = () => {
    localStorage.removeItem(STORAGE_KEY);
};
