import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyA3iQzveP0Mihr1zBYDv37cXOOl-R5p-K0",
  authDomain: "todoist-441c7.firebaseapp.com",
  databaseURL: "https://todoist-441c7-default-rtdb.firebaseio.com",
  projectId: "todoist-441c7",
  storageBucket: "todoist-441c7.appspot.com",
  messagingSenderId: "211533310406",
  appId: "1:211533310406:web:f2a12f465e964e36f9eac7",
});

export { firebaseConfig as firebase };
