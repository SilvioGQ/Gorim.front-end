import firebase from "firebase/app";

// import "firebase/analytics";

import "firebase/auth";
import "firebase/firestore";
/*
const firebaseConfig = {
    apiKey: "AIzaSyBxsp6vmiEHAxwbwM2Tbe5qWjwNQAteqEI",
    authDomain: "gorim-ddfe2.firebaseapp.com",
    projectId: "gorim-ddfe2",
    storageBucket: "gorim-ddfe2.appspot.com",
    messagingSenderId: "31012747136",
    appId: "1:31012747136:web:722225b25f0eb61a31f365",
    measurementId: "G-05PKQV9GQF"
};
*/
const firebaseConfig = {
    apiKey: "AIzaSyChCMVE8F10vKpVAxoJ6tMV8GJ7qMyj690",
    authDomain: "gorim2.firebaseapp.com",
    projectId: "gorim2",
    storageBucket: "gorim2.appspot.com",
    messagingSenderId: "17487844325",
    appId: "1:17487844325:web:4a7f982b5c44ac8b4b950c",
    measurementId: "G-4LD8PYZGRT"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export { firebase }

export const auth = firebase.auth;
export const db = firebase.firestore(app);