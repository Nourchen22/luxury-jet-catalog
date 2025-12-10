import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKD6NWO5ULrduyUElc0qxoPiH9w8MGIX4",
  authDomain: "luxury-jets-db.firebaseapp.com",
  projectId: "luxury-jets-db",
  storageBucket: "luxury-jets-db.firebasestorage.app",
  messagingSenderId: "758619618102",
  appId: "1:758619618102:web:35af909cb41f1785ff5197"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);