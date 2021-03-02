import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDQXIt_y8DFPXLVVqPfrvFfTI9zmsLcAqc',
  authDomain: 'xtraclass-e2e81.firebaseapp.com',
  databaseURL: 'https://xtraclass-e2e81-default-rtdb.firebaseio.com',
  projectId: 'xtraclass-e2e81',
  storageBucket: 'xtraclass-e2e81.appspot.com',
  messagingSenderId: '170070071936',
  appId: '1:170070071936:web:07479538e0eca89b436465',
  measurementId: 'G-W9XQG6LQW9',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();
