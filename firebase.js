// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCllJiV9Rl7mHftcQYStPRDUglNjjgnifk",
  authDomain: "twitter-better.firebaseapp.com",
  projectId: "twitter-better",
  storageBucket: "twitter-better.appspot.com",
  messagingSenderId: "206508769935",
  appId: "1:206508769935:web:33764d43441c72774226fa",
  measurementId: "G-1MS3X9JS8H"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };

