/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'fade-in-up': 'fadeInUp 0.6s ease-out',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce-short': 'bounceShort 1s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                bounceShort: {
                    '0%, 100%': { transform: 'translateY(-5%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
                    '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
                }
            }
        },
    },
    darkMode: 'class',
    plugins: [],
}
