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
  apiKey: "AIzaSyDtnkq8a4PU9TZd1ZFjZN_es8DWaupUiAY",
  authDomain: "chatify-1d5f9.firebaseapp.com",
  projectId: "chatify-1d5f9",
  storageBucket: "chatify-1d5f9.appspot.com",
  messagingSenderId: "279335610048",
  appId: "1:279335610048:web:e2608aaacbe6ca7a4faf25",
  measurementId: "G-KZ6VPPPCM9"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);