// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQSFv1sQb3_5b3MLwhaECaGMgj-wFaNyg",
  authDomain: "library-management-7f05c.firebaseapp.com",
  projectId: "library-management-7f05c",
  storageBucket: "library-management-7f05c.appspot.com",
  messagingSenderId: "132758799675",
  appId: "1:132758799675:web:44922f418a23e0fcdce31e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);