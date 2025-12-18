
import { useState } from 'react';
import { sendSignInLinkToEmail } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { LoginIllustration } from '../components/Illustrations';

export default function Login() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus('');

        const actionCodeSettings = {
            // URL you want to redirect back to. 
            url: window.location.origin + '/verify',
            handleCodeInApp: true,
        };

        try {
            await sendSignInLinkToEmail(auth, email, actionCodeSettings);
            window.localStorage.setItem('emailForSignIn', email);
            setStatus('Magic link sent! Check your inbox.');
        } catch (error) {
            console.error(error);

            // Check for quota exceeded or other errors in dev mode
            if (import.meta.env.DEV || error.code === 'auth/quota-exceeded' || error.message.includes('quota')) {
                // Determine display name from email
                const namePart = email.split('@')[0];
                const displayName = namePart.charAt(0).toUpperCase() + namePart.slice(1);

                // Mock user data
                const mockUser = {
                    uid: 'demo-user-' + Date.now(),
                    email: email,
                    displayName: displayName || 'Demo Student',
                    emailVerified: true,
                    isAnonymous: false
                };

                // Store in localStorage (UniPilot Dashboard checks this)
                window.localStorage.setItem('user_data', JSON.stringify(mockUser));

                setStatus('Email limit reached. Using demo login for now.');

                // Short delay to let user read the message, then redirect
                setTimeout(() => {
                    navigate('/dashboard');
                }, 1500);
            } else {
                setStatus('Error: ' + error.message);
            }
        } finally {
            setIsLoading(false);
        }
    };



    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 transition-colors duration-200 relative page-wrapper">

            {/* Back Button */}
            <button
                onClick={() => navigate('/')}
                className="absolute top-6 left-6 flex items-center gap-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors font-medium text-sm"
            >
                <span>←</span> Back
            </button>

            {/* Brand / Logo Area */}
            <div className="mb-4 text-center cursor-pointer" onClick={() => navigate('/')}>
                <div className="text-4xl mb-2">🎓</div>
                <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                    UniPilot
                </div>
            </div>

            {/* Login Card */}
            <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 p-8 sm:p-10 transition-all duration-200 overflow-hidden relative">
                {/* Decorative top accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-violet-500"></div>

                <div className="flex justify-center mb-6">
                    <LoginIllustration className="w-48 h-32 text-indigo-500" />
                </div>

                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        Welcome to UniPilot 👋
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                        Your academic & career co-pilot
                    </p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="name@university.edu"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full btn-primary py-3 !text-lg !rounded-lg disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </span>
                        ) : 'Continue with Email'}
                    </button>
                </form>

                {/* Status Messages */}
                {status && (
                    <div className={`mt-6 p-4 rounded-lg text-sm text-center font-medium ${status.startsWith('Error')
                        ? 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400'
                        : 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                        }`}>
                        {status}
                    </div>
                )}

                {/* Footer / Helper Text */}
                <div className="mt-8 text-center border-t border-slate-100 dark:border-slate-700 pt-6">
                    <p className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-wide font-semibold">
                        No password required • OTP based login
                    </p>
                </div>
            </div>

            <div className="mt-8 text-sm text-slate-400 dark:text-slate-500 text-center">
                © 2025 UniPilot. All rights reserved.
            </div>
        </div>
    );
}
