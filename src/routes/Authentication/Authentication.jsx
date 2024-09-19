import SignUp from "../../components/Sign-up/Sign-up";
import SignIn from "../../components/Sign-in/Sign-in";
import './Authentication.scss'

const Authentication = () => {
    return (
        <div className="authentication-container">
            <SignIn/>
            <SignUp/> 
        </div>
    )
}

export default Authentication