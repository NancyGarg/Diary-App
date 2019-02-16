import * as firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDSlu_nnaB00Bnuq1kQXAyXVvH8GIsIk-U",
    authDomain: "diary-e9979.firebaseapp.com",
    databaseURL: "https://diary-e9979.firebaseio.com",
    projectId: "diary-e9979",
    storageBucket: "diary-e9979.appspot.com",
    messagingSenderId: "81785846881"
  };
  firebase.initializeApp(config);

  export const database= firebase.database().ref('/notes');
  export const auth=firebase.auth();
  export const facebookProvider = new firebase.auth.FacebookAuthProvider();
  export const googleProvider = new firebase.auth.GoogleAuthProvider();

