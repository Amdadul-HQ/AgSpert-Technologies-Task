// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2-F02CsSJmmSz8C_ZZgweuOogLJzKcuk",
  authDomain: "agspeak-297c6.firebaseapp.com",
  projectId: "agspeak-297c6",
  storageBucket: "agspeak-297c6.appspot.com",
  messagingSenderId: "117759692637",
  appId: "1:117759692637:web:5023bc128d69eb037f62b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;