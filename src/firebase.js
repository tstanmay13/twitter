// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkFVFSZxGxhbmvrlKj-RcpR_FjhpMQ3Ms",
  authDomain: "twitter-clone-dd2d0.firebaseapp.com",
  projectId: "twitter-clone-dd2d0",
  storageBucket: "twitter-clone-dd2d0.appspot.com",
  messagingSenderId: "46924811009",
  appId: "1:46924811009:web:fcfdc0a2ea6504db376900",
  measurementId: "G-2CHSPFBFDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
