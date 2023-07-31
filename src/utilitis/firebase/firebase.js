
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  writeBatch,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVC5I3IvpoRcHxZB0wOVaTzkTM0u9lt-8",
  authDomain: "crwn-ecomers-db.firebaseapp.com",
  projectId: "crwn-ecomers-db",
  storageBucket: "crwn-ecomers-db.appspot.com",
  messagingSenderId: "896730559786",
  appId: "1:896730559786:web:21be576232699e62701a53",
  measurementId: "G-C8FT2VFPNF",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const googleprovider = new GoogleAuthProvider();
googleprovider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

// authentication.....................

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleprovider);
export const db = getFirestore();

export const createUserFromAuth = async (userauth) => {
  const userReferance = doc(db, "user", userauth.uid);
  const userSnapshot = await getDoc(userReferance);

  if (userSnapshot.exists()) {
    const { displayName, email } = userauth;
    const createDate = new Date();

    try {
      await setDoc(userReferance, {
        displayName,
        email,
        createDate,
      });
    } catch (error) {
      console.log("error", error.message);
    }
  }
  return userReferance;
};

export const signInAuthWithEmailAndPassword = async(email,password)=>{
  if (!email || !password) return
    
  return signInWithEmailAndPassword(auth,email,password)
}

export const createAuthUserWithEmailAndPassword = async(email,password)=>{
  if (!email || !password) return
    
  return createUserWithEmailAndPassword(auth,email,password)
}

export const signOutUser = async() => await signOut(auth);

export const onAuthStateChanged_Listener = (callback)=> onAuthStateChanged(auth,callback) 

//Get product data from firebase........................

export const getCatagoriesAndDocuments = async () =>{
  const collectionRef= collection(db,'categories');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(docSnapshot=>docSnapshot.data());
}