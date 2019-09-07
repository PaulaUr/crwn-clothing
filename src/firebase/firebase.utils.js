import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDuB5z0zxZQ-zbzHJTc0j6tkugDCDn_f68",
    authDomain: "crwn-db-c894b.firebaseapp.com",
    databaseURL: "https://crwn-db-c894b.firebaseio.com",
    projectId: "crwn-db-c894b",
    storageBucket: "crwn-db-c894b.appspot.com",
    messagingSenderId: "723603147604",
    appId: "1:723603147604:web:f0a978aa4838af5a"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        //create new user,using the data from the userAuth object
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (error) {
            console.log('error creating user', error.message);
        }
    }
    console.log(snapShot);
    return userRef;
}
 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;