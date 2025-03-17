
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqLZhDZkGLqu6tOUCHcICTFhy3JvF31bo",
  authDomain: "sitecarol-fd1b0.firebaseapp.com",
  projectId: "sitecarol-fd1b0",
  storageBucket: "sitecarol-fd1b0.firebasestorage.app",
  messagingSenderId: "278887290480",
  appId: "1:278887290480:web:6b5787a9af6d49072d86b5"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}