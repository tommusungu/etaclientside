// firebaseConfig.js
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import 'firebase/auth';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9mSBIdvWe0UtCxCuMgFAEKtfP5OHQhek",
  authDomain: "etaawards-58ef1.firebaseapp.com",
  projectId: "etaawards-58ef1",
  storageBucket: "etaawards-58ef1.appspot.com",
  messagingSenderId: "496884876281",
  appId: "1:496884876281:web:4206680e1b33161f2bb328",
  measurementId: "G-7RCD8G3NHQ"

  //  apiKey: "AIzaSyBf20zwI0FGQ6Xr62M2pYPNi25hR6cgZaE",
  // authDomain: "etaweb-49958.firebaseapp.com",
  // projectId: "etaweb-49958",
  // storageBucket: "etaweb-49958.appspot.com",
  // messagingSenderId: "140189129257",
  // appId: "1:140189129257:web:0cd5e7f08cdfb0969d9a38",
  // measurementId: "G-W5017PRSG3"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
export { app, firestore, auth };
