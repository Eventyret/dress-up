import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth';

const config = {
  apiKey: 'AIzaSyDucD4O8SjIBVfcB4xvF1hvR3H38EqYpns',
  authDomain: 'dress-up-shop.firebaseapp.com',
  databaseURL: 'https://dress-up-shop.firebaseio.com',
  projectId: 'dress-up-shop',
  storageBucket: '',
  messagingSenderId: '202511854339',
  appId: '1:202511854339:web:469f68090eb658a33f5736'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
