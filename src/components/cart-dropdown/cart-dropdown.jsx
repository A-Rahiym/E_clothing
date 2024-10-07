import './cart-dropdown.scss'
import Button from '../button/button'
import {useContext,React} from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart'
import CartItem from '../cart-item/cart-item'

const CartDropdown = () => {
  const navigate = useNavigate()
  const checkOutHandler = () => {
    navigate('/checkout');
  }
  const {cartItems} = useContext(CartContext)
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) =>(<CartItem key={item.id} cartItem={item}/>))}
      </div>
      <Button Clicked={checkOutHandler}>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown
