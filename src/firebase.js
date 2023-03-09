// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu_NZ_KD8lRv_3jxbzp-d6P1Gp4HX9QYg",
  authDomain: "authen-react-66777.firebaseapp.com",
  projectId: "authen-react-66777",
  storageBucket: "authen-react-66777.appspot.com",
  messagingSenderId: "1093614009240",
  appId: "1:1093614009240:web:c6987f9b7496fc7eb389ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
