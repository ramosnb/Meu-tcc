// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7s_tC1uugkDHyWgkI-g6g7qpZROrN-A4",
  authDomain: "easy-parking-238ed.firebaseapp.com",
  databaseURL: "https://easy-parking-238ed-default-rtdb.firebaseio.com",
  projectId: "easy-parking-238ed",
  storageBucket: "easy-parking-238ed.appspot.com",
  messagingSenderId: "9063634148",
  appId: "1:9063634148:web:f3cc9411940519f78a48f1",
  measurementId: "G-LNK14E6056"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
