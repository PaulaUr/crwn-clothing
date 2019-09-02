import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDuB5z0zxZQ-zbzHJTc0j6tkugDCDn_f68",
    authDomain: "crwn-db-c894b.firebaseapp.com",
    databaseURL: "https://crwn-db-c894b.firebaseio.com",
    projectId: "crwn-db-c894b",
    storageBucket: "",
    messagingSenderId: "723603147604",
    appId: "1:723603147604:web:f0a978aa4838af5a"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;