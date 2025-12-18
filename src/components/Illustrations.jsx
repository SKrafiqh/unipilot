
export const LoginIllustration = ({ className }) => (
    <svg viewBox="0 0 500 400" className={className} xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 0.1 }} />
                <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.1 }} />
            </linearGradient>
        </defs>
        <path fill="url(#grad1)" d="M50,150 Q100,100 250,150 T450,150" stroke="#6366f1" strokeWidth="2" fillOpacity="0.5" />
        <circle cx="250" cy="200" r="120" fill="currentColor" className="text-indigo-50 dark:text-slate-700" opacity="0.5" />
        <rect x="180" y="140" width="140" height="120" rx="10" fill="white" className="dark:fill-slate-800" stroke="#6366f1" strokeWidth="2" />
        <circle cx="250" cy="180" r="20" fill="#8b5cf6" />
        <rect x="200" y="220" width="100" height="10" rx="5" fill="#e2e8f0" className="dark:fill-slate-600" />
        <rect x="200" y="240" width="70" height="10" rx="5" fill="#e2e8f0" className="dark:fill-slate-600" />

        {/* Decorative elements */}
        <circle cx="150" cy="100" r="5" fill="#F472B6" className="animate-pulse" />
        <circle cx="350" cy="300" r="8" fill="#34D399" className="animate-bounce" style={{ animationDuration: '3s' }} />
    </svg>
);

export const NotesIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6.00018V18.0002M12 6.00018C12 4.11438 12 3.17148 11.4142 2.58578C10.8284 2 9.8856 2 7.9998 2H5.9999C4.1141 2 3.1712 2 2.5854 2.58579C1.9996 3.17157 1.9996 4.11447 1.9996 6.00026V17.9998C1.99955 19.8855 1.99953 20.8284 2.58529 21.4142C3.17105 22 4.11394 22 5.99971 22H17.9999C19.8857 22 20.8286 22 21.4144 21.4142C22.0002 20.8284 22.0002 19.8856 22.0002 18V6.0001C22.0002 4.1143 22.0002 3.1714 21.4144 2.58569C20.8286 2 19.8857 2 17.9999 2H16.0001C14.1143 2 13.1714 2 12.5856 2.58578C12 3.17157 12 4.11447 12 6.00018ZM7.9998 2V6.00018H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 10H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 14H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

export const ProjectsIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M8 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 9.09H20.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.9955 13.7H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.29431 16.7H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.29431 13.7H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.9955 16.7H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.6865 16.7H15.6955" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.6865 13.7H15.6955" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const RoadmapsIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 7.5V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22V16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12H7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const AIIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 13.5C7 13.5 8.5 10.5 10 10.5C11.5 10.5 12.5 13.5 14 13.5C15.5 13.5 17 10.5 17 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 16.5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 7.5H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const EmptyStateIllustration = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 15C9 15 10 17 12 17C14 17 15 15 15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
