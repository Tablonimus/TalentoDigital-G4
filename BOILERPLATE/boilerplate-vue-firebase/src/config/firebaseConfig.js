// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9h1UyGkr2CatITeGDj695kaPVhNnihl0",
  authDomain: "boilerplate-vue-firebase.firebaseapp.com",
  projectId: "boilerplate-vue-firebase",
  storageBucket: "boilerplate-vue-firebase.appspot.com",
  messagingSenderId: "748874078258",
  appId: "1:748874078258:web:441f0054c72ff1d7f9042b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app