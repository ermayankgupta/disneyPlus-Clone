import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCgM0digIrEJRfXctFAbxyltkMpnPRQEM0",
  authDomain: "disneyplus-f7dd4.firebaseapp.com",
  projectId: "disneyplus-f7dd4",
  storageBucket: "disneyplus-f7dd4.appspot.com",
  messagingSenderId: "354787218619",
  appId: "1:354787218619:web:ea4a3767ed8baf16b3459e",
  measurementId: "G-ZJ8MDGCV7M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
