import * as firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7o3pRPXmXlS9UMjWgHskl4P-k16KQELU",
  authDomain: "bchaiyos-28.firebaseapp.com",
  projectId: "bchaiyos-28",
  storageBucket: "bchaiyos-28.appspot.com",
  messagingSenderId: "950677304593",
  appId: "1:950677304593:web:b466ece9c83d1f0ac1c8b0",
  measurementId: "G-RMSVDKTTPV"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const storage = firebaseApp.storage();
