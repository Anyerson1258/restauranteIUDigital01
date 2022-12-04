// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsP6uC-UU39jpzVMcACJaqzY1gmSVoUXs",
  authDomain: "iudigital.firebaseapp.com",
  projectId: "iudigital",
  storageBucket: "iudigital.appspot.com",
  messagingSenderId: "610893639419",
  appId: "1:610893639419:web:c6f8a2d85fc1734b250a5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const FirebaseFirestore = getFirestore(app);


export {
    FirebaseFirestore,
}