import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // find if cartitems contains productToadd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    // if card item exist
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
    }
    // return new array with modified cart item / new cart item
    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );


    // check if quantity is equal to 1 , if true  remove item from cart
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
    // return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id
    ? {...cartItem, quantity:cartItem.quantity - 1} : cartItem
 );
};

const DeleteCartItem = (cartItems, cartItemToDelete) => {
    // find the cart item to remove
    // const existingCartItem = cartItems.find(
    //     (cartItem) => cartItem.id === cartItemToDelete.id
    // );  
    return cartItems.filter(cartItem => cartItem.id !== cartItemToDelete.id);
};




export const CartContext = createContext({
    isCartOpen: false,
    setIsCartopen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    deleteItemFromCart: () => { },
    cartCount: 0,
    cartTotal: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartopen] = useState(false);

    // array to store added cart items 
    const [cartItems, setCartItems] = useState([]);

    // cart count
    const [cartCount, setCartCount] = useState(0);
    // cart total
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity,
            0);
    setCartCount(newCartCount);
    }, [cartItems]);


    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price,
            0);
    setCartTotal(newCartTotal);
    console.log(newCartTotal);
    }, [cartItems]);


    // adding items to cart
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    // remove items from cart
    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    const deleteItemFromCart = (productToDelete) =>{
        setCartItems(DeleteCartItem(cartItems, productToDelete))
    }

    const value = { isCartOpen, setIsCartopen, addItemToCart, removeItemFromCart, deleteItemFromCart,cartItems, cartCount, cartTotal }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}