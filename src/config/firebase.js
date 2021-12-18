import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCv8McJ0OygKyIz1wslot0wYLu9i7f0o2E",
  authDomain: "thejokerbox-v0-1600496093897.firebaseapp.com",
  projectId: "thejokerbox-v0-1600496093897",
  storageBucket: "thejokerbox-v0-1600496093897.appspot.com",
  messagingSenderId: "38145311483",
  appId: "1:38145311483:web:556f9136f49ef40741265e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

const auth = getAuth();

export { app, auth, db };