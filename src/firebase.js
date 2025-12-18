// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPLSBDBePTQubjYXf7yXwXQJGcWI8jCxI",
    authDomain: "unipilot-app-6ac14.firebaseapp.com",
    projectId: "unipilot-app-6ac14",
    storageBucket: "unipilot-app-6ac14.firebasestorage.app",
    messagingSenderId: "1088529062852",
    appId: "1:1088529062852:web:a8e0bdc76c8a73cc6ae291"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);