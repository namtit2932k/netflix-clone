import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.APP_KEY,
  authDomain: "netflix-24948.firebaseapp.com",
  projectId: "netflix-24948",
  storageBucket: "netflix-24948.appspot.com",
  messagingSenderId: "856452320427",
  appId: "1:856452320427:web:7e3d9a19c9a131df15fbee",
  measurementId: "G-CPWKFJ04DH",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
