import { initializeApp } from 'firebase/app';
import {getAuth, 
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider} 
    from 'firebase/auth';

import {
  getFirestore,
  doc,   // get document from database
  getDoc, // access data in gotten document
  setDoc  // modify gotten document
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAveb2jN7LJy8tNmPEbkLaTs5uL5HWzZs",
    authDomain: "e-clothing-db-4fb83.firebaseapp.com",
    projectId: "e-clothing-db-4fb83",
    storageBucket: "e-clothing-db-4fb83.appspot.com",
    messagingSenderId: "70504861557",
    appId: "1:70504861557:web:083dc18fce0f69b0488d3c"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

//   authentication provider which can be configured according to use
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt : "select_account"
  });


export const auth = getAuth(); // using same authentication function all across the webapp
export const signInWithGooglePopup = () => signInWithPopup(auth,provider); // authenication function

                      /// get database from firestore ///
export const db = getFirestore(); 
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users',userAuth.uid) //  => get database , user document, 'unique identifier pointer'  
  
  // get users info using user auth id
  const userSnapShot = await getDoc(userDocRef);

  // check if user exist in database
  if(!userSnapShot.exists()){
    const {displayName,email} = userAuth;
    const createdAt = new Date(); 
    try{
      await setDoc(
        userDocRef, {
          displayName,
          email,
          createdAt
        }
      )
    }catch(error){
      console.log('error Creating the user', error.message)
    }
  }
return userDocRef;
};
