import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBAvtb6l01BKuS6EZEJuQAaUiRFXAN_rPU",
  authDomain: "disney-clone-d445d.firebaseapp.com",
  projectId: "disney-clone-d445d",
  storageBucket: "disney-clone-d445d.appspot.com",
  messagingSenderId: "712045266940",
  appId: "1:712045266940:web:48d18709dd5c3739731479",
  measurementId: "G-B4FSHLB6HF",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
