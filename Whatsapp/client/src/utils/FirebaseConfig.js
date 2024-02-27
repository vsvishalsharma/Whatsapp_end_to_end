import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBSV-RzkYAJasy3_OE3nEOkLaPiOd11IIc",
    authDomain: "whatsapp-clone-2fac2.firebaseapp.com",
    projectId: "whatsapp-clone-2fac2",
    storageBucket: "whatsapp-clone-2fac2.appspot.com",
    messagingSenderId: "524597223509",
    appId: "1:524597223509:web:8be763b9295af966aaf4dc",
    measurementId: "G-W4F52KPPWE"
  };
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);