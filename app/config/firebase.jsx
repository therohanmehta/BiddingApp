import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAe-XdzxJPzjkL3ebnH2kexp3IY_fatzoM",
  authDomain: "bidding-5085e.firebaseapp.com",
  projectId: "bidding-5085e",
  storageBucket: "bidding-5085e.appspot.com",
  messagingSenderId: "629900453632",
  appId: "1:629900453632:web:315bea1a6d79505c6275e5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth(app);

export { db };
// console.log(db);
