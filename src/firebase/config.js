import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration provided by user
const firebaseConfig = {
  apiKey: "AIzaSyDeS5dNsUcUZ0403nBiObnvZR-0ED5Ys-4",
  authDomain: "shoplist-40d7a.firebaseapp.com",
  projectId: "shoplist-40d7a",
  storageBucket: "shoplist-40d7a.firebasestorage.app",
  messagingSenderId: "590512090231",
  appId: "1:590512090231:web:08ecd6b16f96f3e8456a72",
  measurementId: "G-52S3CBQXWQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
