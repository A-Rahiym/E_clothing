import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc, // get document from database
  getDoc, // access data in gotten document
  setDoc, // modify gotten document
  getDocs,
  collection,
  writeBatch,
  query,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAveb2jN7LJy8tNmPEbkLaTs5uL5HWzZs",
  authDomain: "e-clothing-db-4fb83.firebaseapp.com",
  projectId: "e-clothing-db-4fb83",
  storageBucket: "e-clothing-db-4fb83.appspot.com",
  messagingSenderId: "70504861557",
  appId: "1:70504861557:web:083dc18fce0f69b0488d3c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//   authentication provider which can be configured according to use
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

// AUTHENTICATOR
export const auth = getAuth();

/// SIGN IN OPTIONS ///
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, provider).then((result) => {
    console.log(result);
  }); // authenication function

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth , provider)

export const SignInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
/// SIGN OUT METHOD ///
export const signOutUser = () => signOut(auth);

/// CREATING USER WITH EMAIL AND PASSWORD ///
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

/// CHANGE IN AUTHENTICATION LISTENER ///
export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback); // calls callbacks when auth/object state changes
  // console.log(callback,"auth object:",auth)
};

/// ACCESSING FIRESTORE DATABASE ///
export const db = getFirestore();
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid); //  => get database , user document, 'unique identifier pointer'
  // get users info using user auth id
  const userSnapShot = await getDoc(userDocRef);
  // check if user exist in database
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error Creating the user", error.message);
    }
  }
  // returns user document if it already exist
  return userDocRef;
};

// SAVING PRODUCT COLLECTION IN FIRESTORE
export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("done");
};

// GETTING PRODUCT FROM FIRESTORE
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data())
};
