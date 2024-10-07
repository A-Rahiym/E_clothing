import { React, useContext } from 'react'
import CheckoutCard from '../../components/Checkout-card/CheckoutCard';
import { CartContext } from '../../contexts/cart';
import './Checkout.scss'


const Checkout = () => {
    const { cartItems, addItemToCart,removeItemFromCart } = useContext(CartContext)
    return (
        <div>
            <h1>checkout page</h1>
            {cartItems.map((item) => {
                // for logical javascript implementation 
                return (
                    <div className='checkout-item'>
                        <div className='border' />
                        <span onClick={()=> removeItemFromCart(item)}> decrement </span>
                        <CheckoutCard key={item.uid} product={item} />
                        <span onClick={() => addItemToCart(item)}> Increment </span>
                        <div className='border' />
                    </div>
                )
            })}
        </div>
    )
}

export default Checkout