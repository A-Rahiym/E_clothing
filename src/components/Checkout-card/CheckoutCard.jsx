import React from 'react'
import './CheckoutCard.scss'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';
import { addItemToCart, removeItemFromCart, deleteItemFromCart} from '../../store/cart/cart-action';
import { useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart selector';
import { useSelector } from 'react-redux';



const CheckoutCard = ({ item }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const { name, imageUrl, quantity, price } = item;
    // const { addItemToCart, removeItemFromCart, deleteItemFromCart } = useContext(CartContext)
    
    const deleteItemHandler = () => dispatch(deleteItemFromCart(cartItems,item));
    const addItemHandler = () => dispatch(addItemToCart(cartItems,item));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems,item));
    
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'> {name} </span>
            <span className='quantity'>
                <div className='arrow'  onClick={removeItemHandler}>&#10094;</div>
                <span className='value'>
                    {quantity}
                </span>
                <div className='arrow'  onClick={addItemHandler}>&#10095; </div>
            </span>
            <span className='price'> {price} </span>
            <div className='remove-button' onClick={deleteItemHandler}> &#10005;</div>

        </div>
    )
}

export default CheckoutCard;