// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm5e3ZEYTPw8PHoqlZJW3KmuRErjq_rQE",
  authDomain: "todo-app-87456.firebaseapp.com",
  projectId: "todo-app-87456",
  storageBucket: "todo-app-87456.appspot.com",
  messagingSenderId: "297594602422",
  appId: "1:297594602422:web:c35ef794dc34e691c53717",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
