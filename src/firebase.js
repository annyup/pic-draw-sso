// firebase.js

import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEO2ba1uqXgGgxGfGyprWJ-WYnj3stdnA",
    authDomain: "anny-pham-project-five.firebaseapp.com",
    databaseURL: "https://anny-pham-project-five.firebaseio.com",
    projectId: "anny-pham-project-five",
    storageBucket: "anny-pham-project-five.appspot.com",
    messagingSenderId: "968522599205",
    appId: "1:968522599205:web:2703cb30469cf9be3ba8cc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
