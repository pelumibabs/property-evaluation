// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV9AiZbn49rgouqxG_nqsDt7C_Hmqh6IE",
  authDomain: "property-evaluation-b7483.firebaseapp.com",
  projectId: "property-evaluation-b7483",
  storageBucket: "property-evaluation-b7483.appspot.com",
  messagingSenderId: "567910316370",
  appId: "1:567910316370:web:bdeff230a7a154b280628b",
  measurementId: "G-N1RX7V84LF",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
