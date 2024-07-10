// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const firebaseConfig = {
  apiKey: "AIzaSyBUkd5XXvPyvmjI7Xz3Kd0y8SwgPAi5R5s",
  authDomain: "chatitout-db.firebaseapp.com",
  projectId: "chatitout-db",
  storageBucket: "chatitout-db.appspot.com",
  messagingSenderId: "931639156737",
  appId: "1:931639156737:web:e93a3dbbb4eb6f09312000",
  measurementId: "G-XS7WP7MCRF"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);