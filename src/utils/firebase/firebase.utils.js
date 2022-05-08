import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVpYb8h6pVNCaxXUt5MW8Uf6apDbT3vJA",
  authDomain: "crown-v2-db.firebaseapp.com",
  projectId: "crown-v2-db",
  storageBucket: "crown-v2-db.appspot.com",
  messagingSenderId: "1012527673483",
  appId: "1:1012527673483:web:4db6b17ff1d3809cc5248e",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
