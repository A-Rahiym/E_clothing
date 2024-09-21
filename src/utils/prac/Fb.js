import {initializeApp} from 'firebase/app'

import{
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const config = {

}

// initialize app 
const firebaseApp = initializeApp(config)

// setting up google provider
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();

// SIGN iN OPTIONS
export const signInwithGooglepop = () => signInWithPopup(auth,provider);
export const SignInAuthUserWithEmailAndPassword = async(email,password)=>{
    if(!email || !password) return;
    return await signInWithEmailAndPassword(email,password)
}
export const createAuthUserWithEmailAndPassword = async(email,password)=>{
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password)
}

// ACCESSING FIRESTORE DATABASE
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth,additionalInfo) =>{
    if(!userAuth) return;
    const userDocRef = doc(db,'users',userAuth.uid);;
    const usernapShot = await getDoc(userDocRef);
    if(!usernapShot.exists()){
        const {displayName,email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })
        }catch(error){
            console.log(error)
        }
    }
    return userDocRef;
}

