// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSYPTdIYbfvwboVydA4kY6J7nbiLqAVc8",
  authDomain: "react-to-do-list-bf2c8.firebaseapp.com",
  projectId: "react-to-do-list-bf2c8",
  storageBucket: "react-to-do-list-bf2c8.firebasestorage.app",
  messagingSenderId: "1078578295694",
  appId: "1:1078578295694:web:08169e42cd7d91e441eadf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);