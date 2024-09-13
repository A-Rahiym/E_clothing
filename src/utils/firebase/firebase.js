import { initializeApp } from 'firebase/app';
import {getAuth, 
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider} 
    from 'firebase/auth'

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

export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
export const signInWithredirect = () => signInWithredirect(auth,provider);