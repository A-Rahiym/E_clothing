import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home/Home'
import Navigation from './routes/Navigation/Navigation';
import Authentication from './routes/Authentication/Authentication';
import Shop from './routes/Shop/Shop';
import Checkout from './routes/Checkout/Checkout';
import {useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase";
// import { setCurrentUser } from './store/user/user-action';
import { setCurrentUser } from './store/user/user-reducer';
import { useDispatch } from 'react-redux';
import { getCategoriesAndDocuments } from './utils/firebase/firebase';
import { setCategoriesMap } from './store/categories/categories-action';
import { PersistGate } from 'redux-persist/integration/react';




const App = () => {

  const dispatch = useDispatch();
    useEffect(() => {
      const unsubscribe = onAuthStateChangedListener((user) => {
        if (user) {
          createUserDocumentFromAuth(user);
        }
        dispatch(setCurrentUser(user));

        // console.log("reducer", a);
      });
      return unsubscribe;
    }, []);

   useEffect(()=>{
        const getCategoriesMap = async () => {
            const CategoryMap = await getCategoriesAndDocuments()
          dispatch(setCategoriesMap(CategoryMap));
        };
        getCategoriesMap();
    },[])
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
  )
}

export default App
