import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyBqpyx3HnKhfG2Urc_ijmipFT6K7U2b9lg",
    authDomain: "taylortest-b2004.firebaseapp.com",
    projectId: "taylortest-b2004",
    storageBucket: "taylortest-b2004.appspot.com",
    messagingSenderId: "220784603450",
    appId: "1:220784603450:web:434ac8d86a4f5860dde003",
    measurementId: "G-FXQMMRSGQ8"
  };
  
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;