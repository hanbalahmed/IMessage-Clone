import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCq2mXkPqbrY6cmcCiiTAI0Cv_f1Pf_mDA",
  authDomain: "imessage-clone-hanbalahmed.firebaseapp.com",
  databaseURL: "https://imessage-clone-hanbalahmed.firebaseio.com",
  projectId: "imessage-clone-hanbalahmed",
  storageBucket: "imessage-clone-hanbalahmed.appspot.com",
  messagingSenderId: "77981789352",
  appId: "1:77981789352:web:d98228c1b9b4a565b8269d",
  measurementId: "G-JC6LVS40ZN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
