// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

import { getStorage, ref } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmf19D-AerWiKqar87UVZFlE02S8b7HtU",
  authDomain: "chat2022-220c6.firebaseapp.com",
  projectId: "chat2022-220c6",
  storageBucket: "chat2022-220c6.appspot.com",
  messagingSenderId: "191525043120",
  appId: "1:191525043120:web:11d268846e771956717475",
  measurementId: "G-8HJQ1XXKZ5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const analytics = getAnalytics(app);

export const storage = getStorage();
