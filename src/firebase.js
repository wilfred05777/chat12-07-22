// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

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
  // apiKey: "AIzaSyArczpU-ApuDiddf26O_4G_0-8i66Lua10",
  // authDomain: "todoapp-rmf.firebaseapp.com",
  // databaseURL: "https://todoapp-rmf-default-rtdb.asia-southeast1.firebasedatabase.app",
  // projectId: "todoapp-rmf",
  // storageBucket: "todoapp-rmf.appspot.com",
  // messagingSenderId: "899233000938",
  // appId: "1:899233000938:web:f1cbc2d212441aeeb35693",
  // measurementId: "G-43CEV3YGXQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

export const analytics = getAnalytics(app);
