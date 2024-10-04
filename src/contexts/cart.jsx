import { createContext,useState } from "react";

const addCartItems = (cartItems, productToAdd)=>{
// find if cartitems contains productToadd
const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
// if card item exist
if(existingCartItem){
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id
    ? {...cartItem, quantity:cartItem.quantity + 1}:cartItem
);
}
// return new array with modified cart item / new cart item
return [...cartItems,{...productToAdd, quantity:1}];
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartopen: () => {},
    cartItems: [],
    addItemToCart: () => {},
});

export const CartProvider = ({children}) => {
const [isCartOpen , setIsCartopen] = useState(false);

// array to store added cart items 
const [cartItems, setCartItems] = useState([]);

// adding items to cart
const addItemToCart = (productToAdd)=> {
    setCartItems(addCartItems(cartItems,productToAdd))
}

const value = {isCartOpen , setIsCartopen , addItemToCart , cartItems}

return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}