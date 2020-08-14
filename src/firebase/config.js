import firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyBlqDL_mzudd-cEfmxNCN0hs7vlkz5aPo8",
  authDomain: "slack-clone-68f2d.firebaseapp.com",
  databaseURL: "https://slack-clone-68f2d.firebaseio.com",
  projectId: "slack-clone-68f2d",
  storageBucket: "slack-clone-68f2d.appspot.com",
  messagingSenderId: "651924869985",
  appId: "1:651924869985:web:11d0277c88e60121e5ab20",
  measurementId: "G-LKFZZDV86D",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const firebaseTimestamp = firebase.firestore.FieldValue.serverTimestamp();

export { auth, provider, firebaseTimestamp };
export default db;
