
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';




const firebaseConfig = {
    //api keys
    apiKey: "AIzaSyCq8PiqETG_wY75YDv3gNcvNHD7JXRvzuY",
    authDomain: "vue-chat-app-c1283.firebaseapp.com",
    projectId: "vue-chat-app-c1283",
    storageBucket: "vue-chat-app-c1283.appspot.com",
    messagingSenderId: "408456330888",
    appId: "1:408456330888:web:96f97054ade5039634e93d",
    measurementId: "G-HBEC1KB2ML"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  const database = firebase.database();

  export{ firebase, database}

