import {createContext,useState} from 'react';
import SHOPDATA from '../shop-data.json'

export const ProductContext = createContext({
    Products:[],
});

export const ProductProvider = ({children})=> {
    const [Products , setProduct] = useState(SHOPDATA);
    const value = {Products}
    return (<ProductContext.Provider value={value}>{children}</ProductContext.Provider>

    );
};