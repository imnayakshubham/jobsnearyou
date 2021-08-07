import firebase from "firebase";
const firebaseConfig = {
  //api key
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseapp.auth();
export const db = firebaseapp.firestore();
