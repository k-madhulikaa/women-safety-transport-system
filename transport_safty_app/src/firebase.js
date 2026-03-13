import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTRplB9MQmnFgUkxdPyXzVDWOqi65Wou4",
  authDomain: "transport-safety-a3d20.firebaseapp.com",
  projectId: "transport-safety-a3d20",
  storageBucket: "transport-safety-a3d20.firebasestorage.app",
  messagingSenderId: "20874623787",
  appId: "1:20874623787:web:bf9c8123e45ebf3680636e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);