import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = 
    {
        apiKey: "AIzaSyBPgqiyJ3-T69yTY82pFDIz35MVwZ2L2Ac",
        authDomain: "crwn-db-2a056.firebaseapp.com",
        databaseURL: "https://crwn-db-2a056.firebaseio.com",
        projectId: "crwn-db-2a056",
        storageBucket: "crwn-db-2a056.appspot.com",
        messagingSenderId: "687989427145",
        appId: "1:687989427145:web:6ccf45b237eb9ab5ed3618",
        measurementId: "G-LKPESQ9J8W"
      };

      firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider =  new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase; 











