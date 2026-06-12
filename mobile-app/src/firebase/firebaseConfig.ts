import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB7iSbn8-3c5GSBE0_lIQNGBbUesgP8sIo",
  authDomain: "vahanas-cc84e.firebaseapp.com",
  projectId: "vahanas-cc84e",
  storageBucket: "vahanas-cc84e.firebasestorage.app",
  messagingSenderId: "915513951588",
  appId: "1:915513951588:web:cc801d1d11b2a07334e671",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const database = getDatabase(app);

export default app;