import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyClw7UsaRb-MLSTC6LVhKbdS8j5NMoGVDk",
    authDomain: "disney-clone-e0742.firebaseapp.com",
    projectId: "disney-clone-e0742",
    storageBucket: "disney-clone-e0742.appspot.com",
    messagingSenderId: "163877749547",
    appId: "1:163877749547:web:682600dc2c3a822448bb6e"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage  = firebase.storage;
  export{auth ,provider, storage}
  export default db;
