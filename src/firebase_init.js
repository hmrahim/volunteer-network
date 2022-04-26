// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDmNzUiNW-n9SEXWmttxMspCS5jTx1PpE",
  authDomain: "volunteer-network-4e951.firebaseapp.com",
  projectId: "volunteer-network-4e951",
  storageBucket: "volunteer-network-4e951.appspot.com",
  messagingSenderId: "479984808408",
  appId: "1:479984808408:web:261899b7ee719a23c6c2ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth