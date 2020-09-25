import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD5PPylhBtkEhI5Ywu6gWAxkQFbT9aq6P4",
    authDomain: "react-projects-e0204.firebaseapp.com",
    databaseURL: "https://react-projects-e0204.firebaseio.com",
    projectId: "react-projects-e0204",
    storageBucket: "react-projects-e0204.appspot.com",
    messagingSenderId: "671096997959",
    appId: "1:671096997959:web:51957fbe28d2cb5f810962"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
};