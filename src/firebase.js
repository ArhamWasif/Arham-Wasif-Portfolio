// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDPb58mJxdPuzSnAxz8rdRk6G8EuQ8aSAc",
  authDomain: "authth-d875b.firebaseapp.com",
  projectId: "authth-d875b",
  storageBucket: "authth-d875b.appspot.com",
  messagingSenderId: "772353938834",
  appId: "1:772353938834:web:55beb260a6027084bf1d4b",
  measurementId: "G-FY0D4X25BT",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
