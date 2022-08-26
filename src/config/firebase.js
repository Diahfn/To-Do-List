// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const settings = {timesstampsInSnapshots: true}

const firebaseConfig = {
  apiKey: "AIzaSyA_admDEN-rnnRDMi6IkpVzaD4YNjTXqHE",
  authDomain: "my-app-29dde.firebaseapp.com",
  projectId: "my-app-29dde",
  storageBucket: "my-app-29dde.appspot.com",
  messagingSenderId: "820972250653",
  appId: "1:820972250653:web:a38f33ab3363cf36ad08f4",
  measurementId: "G-TQ3VZB6N66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth()

export {db, auth}