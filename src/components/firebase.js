import firebase from 'firebase'
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAcCge9nY0-ioF6FKUzaHxFj-xxLPUjAAg",
    authDomain: "pup-r-7ec98.firebaseapp.com",
    projectId: "pup-r-7ec98",
    storageBucket: "pup-r-7ec98.appspot.com",
    messagingSenderId: "1044848850170",
    appId: "1:1044848850170:web:74c22d7b0bf82b39580543",
    measurementId: "G-D6XVCV9TJ8"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore();

// export const auth = app.auth()
export default database;