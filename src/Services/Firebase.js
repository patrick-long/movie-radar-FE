// import the firebase core module
import firebase from 'firebase/app';
// import the auth package from firebase
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD4dbLzdUHaQo8geY3hwMInRJsv3d76xVo",
    authDomain: "movie-radar-1be0c.firebaseapp.com",
    projectId: "movie-radar-1be0c",
    storageBucket: "movie-radar-1be0c.appspot.com",
    messagingSenderId: "247434388226",
    appId: "1:247434388226:web:8d9c383b4ef84fe6a4581b"
  };

// initialize the firebase app
firebase.initializeApp(firebaseConfig);

// set up a firebase provider 
const provider = new firebase.auth.GoogleAuthProvider();

// configure the firebase provider
const auth = firebase.auth();

// set up auth action i.e. login, logout, etc.
const login = () => {
    auth.signInWithPopup(provider);
};

const logout = () => {
    auth.signOut();
};

// export our actions
export {
    auth,
    login, 
    logout,
}
