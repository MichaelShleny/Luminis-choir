// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBypA_-tVaBG_axJaKhttNAHzIsrig7ivQ",
  authDomain: "luminis-choir.firebaseapp.com",
  projectId: "luminis-choir",
  storageBucket: "luminis-choir.appspot.com",
  messagingSenderId: "322279012262",
  appId: "1:322279012262:web:ec8aebb88f0de95d264167"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
export const auth = getAuth()