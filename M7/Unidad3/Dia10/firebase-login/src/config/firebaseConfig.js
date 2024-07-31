// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1398UKRaLKwQjMosc7TXgjm9XbVlVrKU",
  authDomain: "login-example-9009b.firebaseapp.com",
  projectId: "login-example-9009b",
  storageBucket: "login-example-9009b.appspot.com",
  messagingSenderId: "1095943953945",
  appId: "1:1095943953945:web:c9e13b6f4d1074f5355488",
};

export const app = initializeApp(firebaseConfig);
export default app;

/* Métodos de firebase Auth */
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";


// Initialize Firebase
export const auth = getAuth(app);

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};

