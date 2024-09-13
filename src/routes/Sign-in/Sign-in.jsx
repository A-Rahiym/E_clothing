import { signInWithGooglePopup,signInWithredirect } from "../../utils/firebase/firebase"

const SignIn = () => {
const logGoogleuser = async () => {
   const response = await signInWithGooglePopup();
   console.log(response) 
}

return(
    <div>
        <h1>Sign in Page</h1>
        <button onClick={logGoogleuser}>sign in with google</button>
    </div>
)
}

export default SignIn