import { createContext ,useState } from "react";


//  actual value value to be accessed i.e THE CONTEXT , the storage point
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser:()=> null,
})

// provider that creates access to context
export const UserProvider = ({children}) => {
    // values saved within context
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser,setCurrentUser};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}


