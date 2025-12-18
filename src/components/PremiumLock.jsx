
import { useState } from 'react';

/**
 * A hook to manage premium status.
 * In a real app, this would check the user's subscription status from Firebase/Database.
 * For this demo, it's a simple toggle.
 */
export function usePremiumStatus() {
    // Check local storage for simulated premium status
    const [isPremium, setIsPremium] = useState(() => {
        return localStorage.getItem('is_premium') === 'true';
    });

    const upgrade = () => {
        localStorage.setItem('is_premium', 'true');
        setIsPremium(true);
    };

    return { isPremium, upgrade };
}

export function PremiumLock({ children, fallback }) {
    const { isPremium, upgrade } = usePremiumStatus();

    if (isPremium) {
        return children;
    }

    return (
        <div className="relative overflow-hidden rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-900/20 p-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/40 text-3xl">
                🔒
            </div>
            <h3 className="mb-2 text-xl font-bold text-amber-900 dark:text-amber-100">
                Premium Content
            </h3>
            <p className="mb-6 text-amber-800 dark:text-amber-200/80">
                Unlock this solution and get access to expert-verified code, reports, and architecture diagrams.
            </p>
            <button
                onClick={upgrade}
                className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-6 py-2.5 font-bold text-white transition-colors hover:bg-amber-600 shadow-lg shadow-amber-500/30"
            >
                Unlock Now ($9/mo)
            </button>

            {/* Blur effect for content behind (optional visual trick) */}
            <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-t from-amber-100/50 to-transparent pointer-events-none"></div>
        </div>
    );
}
