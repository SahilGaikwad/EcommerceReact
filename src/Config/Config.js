import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCTwvtZ3CGSR-FUE73qLTttc5s_E7LonDw",
    authDomain: "ecommerce-ae730.firebaseapp.com",
    databaseURL: "https://ecommerce-ae730-default-rtdb.firebaseio.com",
    projectId: "ecommerce-ae730",
    storageBucket: "ecommerce-ae730.appspot.com",
    messagingSenderId: "476263350723",
    appId: "1:476263350723:web:73736bb72aab7bb613bd76",
    measurementId: "G-Y221BDTG2W"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }