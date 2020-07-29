import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyD1XNYLbZVuDDfr0NmdZAc1GveVTQ1imnw",
    authDomain: "facebook-messenger-app-d7573.firebaseapp.com",
    databaseURL: "https://facebook-messenger-app-d7573.firebaseio.com",
    projectId: "facebook-messenger-app-d7573",
    storageBucket: "facebook-messenger-app-d7573.appspot.com",
    messagingSenderId: "1046312423022",
    appId: "1:1046312423022:web:965a5e8a188f917540207f",
    measurementId: "G-E5E6VWT4GX"
});
 
const db = firebaseApp.firestore();

export default db;

