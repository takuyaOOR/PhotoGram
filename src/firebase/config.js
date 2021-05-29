import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBlzFml7aY0LnwOdNbYhx5M2IFILgmSwQ0",
  authDomain: "photogram-50e38.firebaseapp.com",
  projectId: "photogram-50e38",
  storageBucket: "photogram-50e38.appspot.com",
  messagingSenderId: "818061395632",
  appId: "1:818061395632:web:babe187e9d432907fd9d75",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//storageとfirestoreを初期化
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
