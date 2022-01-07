// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHv6odXbO2qfZ7b-Akfg0Wrgdiyt2xqbw",
  authDomain: "tinder-clone-b64cd.firebaseapp.com",
  databaseURL: "https://tinder-clone-b64cd-default-rtdb.firebaseio.com",
  projectId: "tinder-clone-b64cd",
  storageBucket: "tinder-clone-b64cd.appspot.com",
  messagingSenderId: "507398412505",
  appId: "1:507398412505:web:497048ac32925c22bd46c8",
  measurementId: "G-P7GGPZ23G5"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database
