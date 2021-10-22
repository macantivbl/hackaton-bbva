// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {

  apiKey: "AIzaSyAuPsTFCi53HnMfrSezpIoO97lnyTDneMI",

  authDomain: "hackaton-bbva-b24b4.firebaseapp.com",

  projectId: "hackaton-bbva-b24b4",

  storageBucket: "hackaton-bbva-b24b4.appspot.com",

  messagingSenderId: "1022893483842",

  appId: "1:1022893483842:web:e3f6a37229c9b067b0cadb"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export {firebase}