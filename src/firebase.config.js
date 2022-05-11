// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { getStorage, connectStorageEmulator } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjrMdkeBNWBhglmFU3XGQi08hpAE2p7JM",
  authDomain: "house-marketplace-app-ee9e7.firebaseapp.com",
  projectId: "house-marketplace-app-ee9e7",
  storageBucket: "house-marketplace-app-ee9e7.appspot.com",
  messagingSenderId: "133553370897",
  appId: "1:133553370897:web:3388f72e2d972d3900beb0",
};
// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
const storage = getStorage();

// if (process.env.NODE_ENV !== "production") {
//   connectFirestoreEmulator(db, "localhost", 8080);
//   connectAuthEmulator(auth, "http://localhost:9099");
//   connectStorageEmulator(storage, "localhost", 9199);
// }
