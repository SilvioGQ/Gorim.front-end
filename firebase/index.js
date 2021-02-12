import firebase from "firebase/app";

// import "firebase/analytics";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBxsp6vmiEHAxwbwM2Tbe5qWjwNQAteqEI",
    authDomain: "gorim-ddfe2.firebaseapp.com",
    projectId: "gorim-ddfe2",
    storageBucket: "gorim-ddfe2.appspot.com",
    messagingSenderId: "31012747136",
    appId: "1:31012747136:web:722225b25f0eb61a31f365",
    measurementId: "G-05PKQV9GQF"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export { firebase }

export const auth = firebase.auth;
export const db = firebase.firestore(app);