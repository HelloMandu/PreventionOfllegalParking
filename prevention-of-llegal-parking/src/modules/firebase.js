import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: 'AIzaSyC1febE1u9rhUZbHj0EzD0527rcm6-Zurk',
    authDomain: 'intense-idea-291609.firebaseapp.com',
    databaseURL: 'https://intense-idea-291609.firebaseio.com',
    projectId: 'intense-idea-291609',
    storageBucket: 'intense-idea-291609.appspot.com',
    messagingSenderId: '409760618549',
    appId: '1:409760618549:web:fc099362f0f93ecb66b97c',
    measurementId: 'G-P74QN6R0QT',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
