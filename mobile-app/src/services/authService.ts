import { serverTimestamp } from "firebase/firestore";
import { signOut } from "firebase/auth";


import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";

import { auth, firestore } from "@/firebase/firebaseConfig";

export const registerUser = async (
  name: string,
  email: string,
  password: string,
  role: string
) => {
  const userCredential =
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

  const uid = userCredential.user.uid;

  await setDoc(doc(firestore, "users", uid), {
    uid,
    name,
    email,
    role,
    approved: role === "driver" ? false : true,
    createdAt: serverTimestamp(),
  });

  return userCredential.user;
};

export const loginUser = async (
  email: string,
  password: string
) => {
  const userCredential =
    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

  return userCredential.user;
};

export const getUserData = async (uid: string) => {
  const docRef = doc(firestore, "users", uid);

  const snapshot = await getDoc(docRef);

  return snapshot.data();
};

export const logoutUser = async () => {
  await signOut(auth);
};