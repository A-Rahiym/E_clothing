import {createContext,useState,useEffect} from 'react';
import { SHOP_DATA } from '../shop-data.js';
import { addCollectionAndDocument , getCategoriesAndDocuments } from '../utils/firebase/firebase.js';

export const ProductContext = createContext({
    Products:[],
});

export const ProductProvider = ({children})=> {
    const [Products , setProduct] = useState([]);

    useEffect(()=>{
        const getCategoriesMap = async () => {
            const CategoryMap = await getCategoriesAndDocuments();
            console.log(CategoryMap)
        }
        getCategoriesMap();
    },[])

    const value = {Products}
    return (<ProductContext.Provider value={value}>{children}</ProductContext.Provider>

    );
};