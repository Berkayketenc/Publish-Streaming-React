import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';



const firebaseConfig = {
    apiKey: "AIzaSyBbGKe_hnT01x2Rau2lNoncinTRtYafDlY",
    authDomain: "movier-9587f.firebaseapp.com",
    databaseURL: "https://movier-9587f-default-rtdb.firebaseio.com",
    projectId: "movier-9587f",
    storageBucket: "movier-9587f.appspot.com",
    messagingSenderId: "101453703553",
    appId: "1:101453703553:web:f52ac3cab2049e31986080",
    measurementId: "G-512VKY9H87"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;