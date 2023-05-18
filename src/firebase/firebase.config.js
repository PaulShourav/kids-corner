// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setupavailable-libraries

// Your web app's Firebase configuration
// console.log(import.meta.env.FB_APIKEY) 
// console.log(import.meta.env.FB_AUTHDOMAIN);
const firebaseConfig = {
  // apiKey:import.meta.env.FB_APIKEY,
  // authDomain:import.meta.env.FB_AUTHDOMAIN,
  // projectId:import.meta.env.FB_PROJECTID,
  // storageBucket:import.meta.env.FB_STORAGEBUCKET,
  // messagingSenderId:import.meta.env.FB_MESSAGINGSENDERID,
  // appId:import.meta.env.FB_APPID
  apiKey: "AIzaSyACW7hgKcIIRyM-FR995wFNfLdl68BYVhM",
  authDomain: "kids-corner-1284b.firebaseapp.com",
  projectId: "kids-corner-1284b",
  storageBucket: "kids-corner-1284b.appspot.com",
  messagingSenderId: "848872725285",
  appId: "1:848872725285:web:7cad733d24eb6dccd698cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;