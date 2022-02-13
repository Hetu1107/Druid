// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBukwWUua_zvq7ACMwELsxu5WneparVtsU",
  authDomain: "solution-challenge-286c4.firebaseapp.com",
  projectId: "solution-challenge-286c4",
  storageBucket: "solution-challenge-286c4.appspot.com",
  messagingSenderId: "1078091472141",
  appId: "1:1078091472141:web:27926974292855f802a444",
  measurementId: "G-YE0CSK56P4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const database = firebase.database();
export { auth, provider, database, storage };
export default db;
