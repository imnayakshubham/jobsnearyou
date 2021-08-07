import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAxHnCLPDRRSNsN1VrWXITfp4flwzLXF7Y",
  authDomain: "jobsnearyou-7e519.firebaseapp.com",
  projectId: "jobsnearyou-7e519",
  storageBucket: "jobsnearyou-7e519.appspot.com",
  messagingSenderId: "288193122265",
  appId: "1:288193122265:web:277f368f8b700f1af993c8",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseapp.auth();
export const db = firebaseapp.firestore();
