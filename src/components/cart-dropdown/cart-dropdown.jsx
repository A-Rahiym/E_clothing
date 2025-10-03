import './cart-dropdown_style.jsx'
import Button from '../button/button'
import { useNavigate } from 'react-router-dom'
import CartItem from '../cart-item/cart-item'
import { CartDropDownContainer , CartItems, EmptyMessage } from './cart-dropdown_style.jsx'
import { selectCartItems } from '../../store/cart/cart selector.js'
import { useSelector } from 'react-redux'

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)
  const navigate = useNavigate()
  const checkOutHandler = () => {
    navigate('/checkout');
  }
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
