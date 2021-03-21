import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD4vMl44XA9mHndFejDnrR2daZd6nm1xW4",
  authDomain: "kofi-4b30a.firebaseapp.com",
  projectId: "kofi-4b30a",
  storageBucket: "kofi-4b30a.appspot.com",
  messagingSenderId: "633060254165",
  appId: "1:633060254165:web:a2463b041b7d7df7751d5c",
  measurementId: "G-JTCZVY2Z30",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
