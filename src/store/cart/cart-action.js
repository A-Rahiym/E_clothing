import { CART_ACTION_TYPES } from "./cart-types";
import { createAction } from "../../utils/reducer/reducerUtils";




export const setCartItems = (cartItems, cartCount, cartTotal) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);

export const setIsCartOpen = (isCartOpen) =>
  createAction(CART_ACTION_TYPES.SET_CART_OPEN, isCartOpen);


// Helpers (same as in context)
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const deleteCartItem = (cartItems, cartItemToDelete) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToDelete.id);


export const addItemToCart = (cartItems , productToAdd) =>  {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems ,productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const deleteItemFromCart = (cartItems , productToDelete)  =>  {
  const newCartItems = deleteCartItem(cartItems, productToDelete);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};