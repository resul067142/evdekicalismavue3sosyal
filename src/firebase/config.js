

import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDC-tLwwbhrWrj8iqhX7H-wTSz0ch-is1k",
    authDomain: "sosyal-2.firebaseapp.com",
    projectId: "sosyal-2",
    storageBucket: "sosyal-2.appspot.com",
    messagingSenderId: "958311794932",
    appId: "1:958311794932:web:80291ce42d019a86aff6a1"
};

const app=initializeApp(firebaseConfig);

const auth=getAuth();
const db=getFirestore();

export {auth,db}