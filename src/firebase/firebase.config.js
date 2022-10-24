// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDiJCEbE_OKxSYJ8Pzzn9pUkkGOg_fMio",
  authDomain: "programming-quack.firebaseapp.com",
  projectId: "programming-quack",
  storageBucket: "programming-quack.appspot.com",
  messagingSenderId: "336009869041",
  appId: "1:336009869041:web:77afb97663d5cc084edb50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;