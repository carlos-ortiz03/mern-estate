// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-276a7.firebaseapp.com",
  projectId: "mern-estate-276a7",
  storageBucket: "mern-estate-276a7.appspot.com",
  messagingSenderId: "452934905184",
  appId: "1:452934905184:web:e9693615e90ac2e963c205",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
