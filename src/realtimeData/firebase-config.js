import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBDLsxm7I7nDi0OYhs9e9D5ngsEXzYn4WM",
  authDomain: "kmutnbcommunity.firebaseapp.com",
  databaseURL: "https://kmutnbcommunity-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kmutnbcommunity",
  storageBucket: "kmutnbcommunity.appspot.com",
  messagingSenderId: "1094643241184",
  appId: "1:1094643241184:web:40da0f1b0fdb2596940085",
  measurementId: "G-ZVVQJKLXEG"
}

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
