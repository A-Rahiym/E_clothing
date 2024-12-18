import { createContext , useState, useEffect } from "react";
import { onAuthStateChangedListener,createUserDocumentFromAuth } from "../utils/firebase/firebase";


//  actual value value to be accessed i.e THE CONTEXT , the storage point
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser:() => null,
})

// provider that creates access to context
export const UserProvider = ({children}) => {

    /// values saved within context !!! 
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser,setCurrentUser};
    
    useEffect(()=>{
     const unsubscribe = onAuthStateChangedListener((user)=>{
        if(user){
        createUserDocumentFromAuth(user);
        }
        setCurrentUser(user);
        console.log(user)
     }) 
     return unsubscribe;
    },[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}


