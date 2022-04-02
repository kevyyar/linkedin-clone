import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBhLsrlE-u6IULe0QSOnzSBjK09fErUJpM",
    authDomain: "linkedin-clone-cabef.firebaseapp.com",
    projectId: "linkedin-clone-cabef",
    storageBucket: "linkedin-clone-cabef.appspot.com",
    messagingSenderId: "573483636301",
    appId: "1:573483636301:web:4de9aca4dd177a65e52e04"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };