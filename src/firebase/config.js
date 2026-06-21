// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1RPw8Zi1ebaxoy2MYXpWvMyC6KV8Jd-Y",
  authDomain: "cursoreact-monica.firebaseapp.com",
  projectId: "cursoreact-monica",
  storageBucket: "cursoreact-monica.firebasestorage.app",
  messagingSenderId: "310398505871",
  appId: "1:310398505871:web:81c928b01ff5dd89bd71fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const auth = getAuth(app)

export { db , auth };