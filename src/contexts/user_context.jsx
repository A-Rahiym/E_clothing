import { createContext, useState, useEffect, useReducer } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase";
import { createAction } from "../utils/reducer/reducerUtils";

//  actual value value to be accessed i.e THE CONTEXT , the storage point
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  console.log(action);
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`unhandled type ${type} in userReducer`);
  }
};

// provider that creates access to context
export const UserProvider = ({ children }) => {
  /// values saved within context !!!
  // const [currentUser, setCurrentUser] = useState(null);
  const INITIAL_STATE = {
    currentUser: null,
  };

  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const a = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = (user) => {
    dispatch(
      createAction(USER_ACTION_TYPES.SET_CURRENT_USER, { payload: user })
    );
  };

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
      console.log(user);
      console.log("reducer", a);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
