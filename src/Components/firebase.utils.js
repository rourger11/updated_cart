// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCymC0X7LiOO9PJGiA1zvux7K4ld8VCeg",
  authDomain: "auth-afb3d.firebaseapp.com",
  projectId: "auth-afb3d",
  storageBucket: "auth-afb3d.appspot.com",
  messagingSenderId: "1001974569638",
  appId: "1:1001974569638:web:88bae28f9f618b444ff267"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt:"select_account"
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider); 
