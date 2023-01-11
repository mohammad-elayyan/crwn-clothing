import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
  getAuth,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD15CwgH3jA3YXnoLEdhzVh0lMD-8f4JTY",
  authDomain: "crwn-clothing-db-ecac3.firebaseapp.com",
  projectId: "crwn-clothing-db-ecac3",
  storageBucket: "crwn-clothing-db-ecac3.appspot.com",
  messagingSenderId: "89845173967",
  appId: "1:89845173967:web:0c206421c6b5e9784f71ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const creatUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const cratedAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, cratedAt });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
};
