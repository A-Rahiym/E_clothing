import './cart-icon.scss'
import { ReactComponent as ShoppingIcon } from "../../assets/004 shopping-bag.svg"

import React from 'react'

const CartIcon = () => {
  return (
    <div className='cart-icon-container'>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon