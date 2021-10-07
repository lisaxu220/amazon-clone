import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBU5kBqeAp29B5xla8uMSORNu0MA5CDsYE",
  authDomain: "clone-48a97.firebaseapp.com",
  projectId: "clone-48a97",
  storageBucket: "clone-48a97.appspot.com",
  messagingSenderId: "577376171574",
  appId: "1:577376171574:web:90cfb0941b1d0f938d4a97"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };