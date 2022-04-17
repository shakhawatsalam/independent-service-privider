// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkmVOQ4esCNWa6hPaCMDbwQ1CFh2gQdMs",
  authDomain: "independent-service-prov-2654f.firebaseapp.com",
  projectId: "independent-service-prov-2654f",
  storageBucket: "independent-service-prov-2654f.appspot.com",
  messagingSenderId: "417429789152",
  appId: "1:417429789152:web:47e99a60c148cdf3e23385"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;