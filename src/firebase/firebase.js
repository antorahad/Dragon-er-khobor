// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK1kpuemCT8qoSukZvxBFoXjFEPw3voUk",
  authDomain: "dragon-9786d.firebaseapp.com",
  projectId: "dragon-9786d",
  storageBucket: "dragon-9786d.appspot.com",
  messagingSenderId: "257899595827",
  appId: "1:257899595827:web:f364fa777c1a3cec2ffb46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;