import {createContext,useState,useEffect} from 'react';
// import { SHOP_DATA } from '../shop-data.js';
import { addCollectionAndDocument , getCategoriesAndDocuments } from '../utils/firebase/firebase.js';

export const CategoriesContext = createContext({
    categoriesMap:{},
});

export const CategoriesProvider = ({children})=> {
    const [categoriesMap , setCategoriesMap] = useState({});

    useEffect(()=>{
        const getCategoriesMap = async () => {
            const CategoryMap = await getCategoriesAndDocuments();
            console.log(CategoryMap)
            setCategoriesMap(CategoryMap)
        };
        getCategoriesMap();
    },[])

    const value = {categoriesMap}
    return (<CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    );
};
