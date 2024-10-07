import './cart-icon.scss'
import { ReactComponent as ShoppingIcon } from "../../assets/004 shopping-bag.svg"
import { useContext } from 'react'
import { CartContext} from '../../contexts/cart'

import React from 'react'
const CartIcon = () => {
 const {isCartOpen,setIsCartopen, cartCount } = useContext(CartContext);
 console.log(cartCount)
 const toggleIsCartOpen = () => setIsCartopen(!isCartOpen)
  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon