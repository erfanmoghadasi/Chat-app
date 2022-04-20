import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyA2d_RZxDoLp1Q7o1qg0xPTcm4ZneowU_A",
    authDomain: "erigram-55507.firebaseapp.com",
    projectId: "erigram-55507",
    storageBucket: "erigram-55507.appspot.com",
    messagingSenderId: "252600405683",
    appId: "1:252600405683:web:c2fcbda535137d628e6ac6"
  }).auth();