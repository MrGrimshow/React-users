import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyBtxKmqL79egciUs0SdulcGMccALWO73E4",
    authDomain: "react-users-89528.firebaseapp.com",
    projectId: "react-users-89528",
    storageBucket: "react-users-89528.appspot.com",
    messagingSenderId: "731684574323",
    appId: "1:731684574323:web:984727f6170eb805e20606"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;