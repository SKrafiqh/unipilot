
import { useEffect, useState } from 'react';
import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

export default function Verify() {
    const navigate = useNavigate();
    const [status, setStatus] = useState('Verifying...');

    useEffect(() => {
        const verifyLogin = async () => {
            if (isSignInWithEmailLink(auth, window.location.href)) {
                let email = window.localStorage.getItem('emailForSignIn');

                if (!email) {
                    // If missing email, prompt user for it
                    email = window.prompt('Please provide your email for confirmation');
                }

                try {
                    const result = await signInWithEmailLink(auth, email, window.location.href);

                    // Save user info locally as requested
                    const userData = {
                        email: result.user.email,
                        uid: result.user.uid,
                        loginTime: new Date().toISOString()
                    };
                    window.localStorage.setItem('user_data', JSON.stringify(userData));

                    window.localStorage.removeItem('emailForSignIn'); // Clear email from storage
                    setStatus('Success! Redirecting...');
                    setTimeout(() => navigate('/dashboard'), 1500);
                } catch (error) {
                    console.error(error);
                    setStatus('Error: ' + error.message);
                }
            } else {
                setStatus('Invalid login link.');
            }
        };

        verifyLogin();
    }, [navigate]);

    return (
        <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
            <h2>{status}</h2>
        </div>
    );
}
