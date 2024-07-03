import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVxoxl12Vye6m-2gxrOCelKaSe6OD-Qtg",
  authDomain: "loginform-cd8d9.firebaseapp.com",
  projectId: "loginform-cd8d9",
  storageBucket: "loginform-cd8d9.appspot.com",
  messagingSenderId: "470839752198",
  appId: "1:470839752198:web:033bd781116abdb029b587"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};