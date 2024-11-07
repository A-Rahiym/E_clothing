import SignUp from "../../components/Sign-up/Sign-up";
import SignIn from "../../components/Sign-in/Sign-in";
import { AuthContainer } from "./Authentication_style";


const Authentication = () => {
    return (
        <AuthContainer>
            <SignIn />
            <SignUp />
        </AuthContainer>
    )
}

export default Authentication