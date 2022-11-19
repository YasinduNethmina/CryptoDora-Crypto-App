import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE,
  authDomain: "cryptodora-app.firebaseapp.com",
  projectId: "cryptodora-app",
  storageBucket: "cryptodora-app.appspot.com",
  messagingSenderId: "384925404106",
  appId: "1:384925404106:web:99a1ff143870245ba7dd33",
  measurementId: "G-DJTM5SMCYL",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
