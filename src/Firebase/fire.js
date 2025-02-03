// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7ePR0Kw-HoBrJ0CB47xHvHTKQ0kBzyNM",
  authDomain: "adminpanel-e5896.firebaseapp.com",
  projectId: "adminpanel-e5896",
  storageBucket: "adminpanel-e5896.firebasestorage.app",
  messagingSenderId: "8935985025",
  appId: "1:8935985025:web:6fd4d7c5e69f06f844e280"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const db = getFirestore(app);


export const auth = getAuth()

export const googleAuth=()=>{

  let provider = new GoogleAuthProvider()
    return signInWithPopup(auth,provider)

}