/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7a_GriiRoOENyqAwAbaQ2Zd7hYDLUtfA",
  authDomain: "shahmeer-s-final-portfolio.firebaseapp.com",
  projectId: "shahmeer-s-final-portfolio",
  storageBucket: "shahmeer-s-final-portfolio.appspot.com",
  messagingSenderId: "871592158542",
  appId: "1:871592158542:web:96f0791151997fec296a1f",
  measurementId: "G-NZ4KW062RV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
