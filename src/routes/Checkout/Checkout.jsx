import { React, useContext } from 'react'
import CheckoutCard from '../../components/Checkout-card/CheckoutCard';
import { CartContext } from '../../contexts/cart';
import './Checkout.scss'


const Checkout = () => {
    const { cartItems , cartTotal} = useContext(CartContext)
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'><span>Product</span></div>
                <div className='header-block'><span>Description</span></div>
                <div className='header-block'><span>Quantity</span></div>
                <div className='header-block'><span>Price</span></div>
                <div className='header-block'><span>Remove</span></div>
            </div>
                {cartItems.map((cartItem)=>(<CheckoutCard key={cartItem.id} item={cartItem}/>))}
            <span className='total'>Total: ${cartTotal}</span>
        </div>
    )
}
export default Checkout