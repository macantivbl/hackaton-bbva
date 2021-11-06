import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAuPsTFCi53HnMfrSezpIoO97lnyTDneMI",

    authDomain: "hackaton-bbva-b24b4.firebaseapp.com",
  
    projectId: "hackaton-bbva-b24b4",
  
    storageBucket: "hackaton-bbva-b24b4.appspot.com",
  
    messagingSenderId: "1022893483842",
  
    appId: "1:1022893483842:web:e3f6a37229c9b067b0cadb"
  

};


// Initialize Firebase

app.initializeApp(firebaseConfig);

const db = app.firestore()
const auth = app.auth()

export {db,auth}