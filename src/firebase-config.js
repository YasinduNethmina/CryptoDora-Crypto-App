import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxOHECli9zmY4gye0mqMPED5oaSir-guI",
  authDomain: "cryptodora-app.firebaseapp.com",
  projectId: "cryptodora-app",
  storageBucket: "cryptodora-app.appspot.com",
  messagingSenderId: "384925404106",
  appId: "1:384925404106:web:99a1ff143870245ba7dd33",
  measurementId: "G-DJTM5SMCYL",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
