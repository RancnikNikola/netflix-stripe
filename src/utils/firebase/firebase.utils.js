// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
} from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvklLX70bcjTCRAR-Z1e1fWEucZK48Ou8",
  authDomain: "netflix-stripe-f6d24.firebaseapp.com",
  projectId: "netflix-stripe-f6d24",
  storageBucket: "netflix-stripe-f6d24.appspot.com",
  messagingSenderId: "705360736424",
  appId: "1:705360736424:web:39a521616824a2abb5929d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// instantiate firestore
// singleton instance
export const db = getFirestore(app);
export const auth = getAuth();

// protected frontend app from external service that can change
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);