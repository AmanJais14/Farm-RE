// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC84PpINBooClMG3gth8UJaX7ntqupTQP4",
  authDomain: "exoticfarmingre.firebaseapp.com",
  projectId: "exoticfarmingre",
  storageBucket: "exoticfarmingre.firebasestorage.app",
  messagingSenderId: "919127659080",
  appId: "1:919127659080:web:d6ffe98aa6d99426ef3e7d",
  measurementId: "G-KS41N53L70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore with error handling
let db;
try {
  db = getFirestore(app);
  console.log('🔥 Firestore database initialized successfully');
  console.log('🔥 Project ID:', firebaseConfig.projectId);
  console.log('🔥 Database instance:', db);
} catch (error) {
  console.error('❌ Failed to initialize Firestore:', error);
}
export { db };

// Initialize Analytics (optional - only in production)
let analytics;
try {
  if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }
} catch (error) {
  console.log('Analytics not available:', error.message);
}
export { analytics };

export default app;
