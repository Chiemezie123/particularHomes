// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0Lg9ysM_JKbuQ-Is7W2qujBB8-Rx4OZI",
  authDomain: "paircularhomes.firebaseapp.com",
  projectId: "paircularhomes",
  storageBucket: "paircularhomes.firebasestorage.app",
  messagingSenderId: "105187662917",
  appId: "1:105187662917:web:2a303b4c9fb7da394e172c",
  measurementId: "G-Q5TD5C01HP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);