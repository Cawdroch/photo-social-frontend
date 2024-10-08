import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBd6Bxuc3M3v_CGEG1Ysga_iBx8ecQrD_c",

  authDomain: "photo-social-mern-d3f35.firebaseapp.com",

  projectId: "photo-social-mern-d3f35",

  storageBucket: "photo-social-mern-d3f35.appspot.com",

  messagingSenderId: "862540396069",

  appId: "1:862540396069:web:ddf68496c70d5083ae71cc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
