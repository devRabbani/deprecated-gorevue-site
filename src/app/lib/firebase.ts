import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrgH2qoPhdmcUjzazc-RbcpkYuSW-WD48",
  authDomain: "revue-169b5.firebaseapp.com",
  projectId: "revue-169b5",
  storageBucket: "revue-169b5.appspot.com",
  messagingSenderId: "694343437964",
  appId: "1:694343437964:web:938fb266a62d52cefa35a9",
  measurementId: "G-14BCLET5T0",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export { provider };
export const signIn = () => {
  auth.signInWithPopup(provider);
};
export const signOut = () => auth.signOut();
export const getRedirectResult = () => auth.getRedirectResult();
