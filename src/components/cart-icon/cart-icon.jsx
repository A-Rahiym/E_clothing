import './cart-icon_style.jsx'
import { useContext } from 'react'
import { CartContext} from '../../contexts/cart'
import { CartIconContiner,ItemCount,ShopingIcon } from './cart-icon_style.jsx'

import React from 'react'
const CartIcon = () => {
 const {isCartOpen,setIsCartopen, cartCount } = useContext(CartContext);
 console.log(cartCount)
 const toggleIsCartOpen = () => setIsCartopen(!isCartOpen)
  return (
    <CartIconContiner onClick={toggleIsCartOpen}>
        <ShopingIcon className='shopping-icon'/>
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContiner>
  )
}

export default CartIcon