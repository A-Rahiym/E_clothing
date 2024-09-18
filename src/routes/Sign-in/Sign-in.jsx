import {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect
} from "../../utils/firebase/firebase"

import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUp from "../../components/Sign-up/Sign-up";


const SignIn = () => {

    useEffect(() => {
        const fetchRedirectResult = async () => {
            try {
                const response = await getRedirectResult(auth);
                console.log(response);
            } catch (error) {
                console.error('Error fetching redirect result:', error);
            }
        };
        fetchRedirectResult();
    }, []);
    



    const logGoogleuser = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user.uid)
        const userDocRef = createUserDocumentFromAuth(user);
        console.log(userDocRef)
    }

    return (
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleuser}>sign in with google</button>
            <SignUp/> 
        </div>
    )
}

export default SignIn