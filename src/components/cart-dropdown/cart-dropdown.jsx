import './cart-dropdown_style.jsx'
import Button from '../button/button'
import {useContext,React} from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart'
import CartItem from '../cart-item/cart-item'
import { CartDropDownContainer , CartItems, EmptyMessage } from './cart-dropdown_style.jsx'

const CartDropdown = () => {
  const navigate = useNavigate()
  const checkOutHandler = () => {
    navigate('/checkout');
  }
  const {cartItems} = useContext(CartContext)
  return (
    <CartDropDownContainer>
      <CartItems>
        {
        cartItems.length ? 
        (cartItems.map((item) =>(<CartItem key={item.id} cartItem={item}/>))):
      (<EmptyMessage as='span'>Your cart is empty</EmptyMessage>)}
      </CartItems>
      <Button Clicked={checkOutHandler}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  )
}

export default CartDropdown
