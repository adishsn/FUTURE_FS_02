import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhnMj1Bh6TCQKyS7uk-pW18wG3Y1Jpx8U",
  authDomain: "lead-management-system-d1ae5.firebaseapp.com",
  databaseURL: "https://lead-management-system-d1ae5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lead-management-system-d1ae5",
  storageBucket: "lead-management-system-d1ae5.firebasestorage.app",
  messagingSenderId: "977125875708",
  appId: "1:977125875708:web:31542c87fd613985109c79",
  measurementId: "G-VT6CZ5R1PJ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
