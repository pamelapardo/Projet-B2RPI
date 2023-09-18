// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5i7q2FM7qK4_XTwma4JXJt_2kYnyKs-Y",
  authDomain: "arkhe-db.firebaseapp.com",
  projectId: "arkhe-db",
  storageBucket: "arkhe-db.appspot.com",
  messagingSenderId: "603061922598",
  appId: "1:603061922598:web:a41ed94a726300b2d12fe7",
  measurementId: "G-RSE73SV1F8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app, "gs://arkhe-db.appspot.com");
const auth = getAuth(app);


export { db, storage, auth };