// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG6PDEP_TKVxOVz8Fccy60UrSDHm1reN8",
  authDomain: "imdb-clone-reactjs.firebaseapp.com",
  projectId: "imdb-clone-reactjs",
  storageBucket: "imdb-clone-reactjs.appspot.com",
  messagingSenderId: "245249500485",
  appId: "1:245249500485:web:8dfd1d0fcd6a2ff4c00a2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

