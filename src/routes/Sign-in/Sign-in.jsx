import { signInWithGooglePopup,createUserDocumentFromAuth} from "../../utils/firebase/firebase"


const SignIn = () => {
const logGoogleuser = async () => {
   const {user} = await signInWithGooglePopup();
   console.log(user.uid)
   const userDocRef = createUserDocumentFromAuth(user);
   console.log(userDocRef)
}


return(
    <div>
        <h1>Sign in Page</h1>
        <button onClick={logGoogleuser}>sign in with google</button>
    </div>
)
}

export default SignIn