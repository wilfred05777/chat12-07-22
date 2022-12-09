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
  apiKey: "AIzaSyCW3fQM6f28Q84JPOQP5csdzc_ki_b0eJQ",
  authDomain: "chat22-d15ed.firebaseapp.com",
  projectId: "chat22-d15ed",
  storageBucket: "chat22-d15ed.appspot.com",
  messagingSenderId: "738934992419",
  appId: "1:738934992419:web:18ca84fec1198f10ac0b96",
  measurementId: "G-TD6C32S26J"
  // apiKey: "AIzaSyAmf19D-AerWiKqar87UVZFlE02S8b7HtU",
  // authDomain: "chat2022-220c6.firebaseapp.com",
  // projectId: "chat2022-220c6",
  // storageBucket: "chat2022-220c6.appspot.com",
  // messagingSenderId: "191525043120",
  // appId: "1:191525043120:web:11d268846e771956717475",
  // measurementId: "G-8HJQ1XXKZ5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const analytics = getAnalytics(app);

export const storage = getStorage();
