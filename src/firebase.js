// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBmu5nTBC0-75y4W_MRD45MacS8CNNLR_4",
  authDomain: "clone-36721.firebaseapp.com",
  databaseURL: "https://clone-36721.firebaseio.com",
  projectId: "clone-36721",
  storageBucket: "clone-36721.appspot.com",
  messagingSenderId: "879241303893",
  appId: "1:879241303893:web:984b328285be6fa8c6c1dc",
  measurementId: "G-J99TTPV19J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
