// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqPZGodjfTIn-A2-O2ICtu4Dlq5oRbYTo",
  authDomain: "dronecommer.firebaseapp.com",
  projectId: "dronecommer",
  storageBucket: "dronecommer.appspot.com",
  messagingSenderId: "1069922568155",
  appId: "1:1069922568155:web:a95a36005dd1faa34a49fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);