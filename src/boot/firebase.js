// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOkO5JtgVwrcFX0VyereHETxNCIDIWbCY",
  authDomain: "mowafaqimsael.firebaseapp.com",
  projectId: "mowafaqimsael",
  storageBucket: "mowafaqimsael.appspot.com",
  messagingSenderId: "884712872990",
  appId: "1:884712872990:web:787e9c98888913bd2ae20f",
  measurementId: "G-RT45ZZP5RB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
