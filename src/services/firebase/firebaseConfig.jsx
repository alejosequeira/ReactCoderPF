// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOsKWLlsA23ffEYz2WXFRy8zqFk0PWPRE",
  authDomain: "reactcoderpf.firebaseapp.com",
  projectId: "reactcoderpf",
  storageBucket: "reactcoderpf.appspot.com",
  messagingSenderId: "593287554727",
  appId: "1:593287554727:web:819fed78ea3fab929add82",
  measurementId: "G-GKDW3K7HV9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);