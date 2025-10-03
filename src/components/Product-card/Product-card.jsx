import React from 'react'
import Button from '../button/button.jsx'
import './Product-card.scss'
import { BUTTON_TYPE_CLASSES } from '../button/button.jsx'
import { useSelector, useDispatch } from 'react-redux'

import { 
  selectCartItems, 
} from '../../store/cart/cart selector.js'
import { addItemToCart } from '../../store/cart/cart-action.js'
const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  const {name, price , imageUrl} = product;
  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => {
    console.log(`dispatching ${product.name}`);
    dispatch(addItemToCart(cartItems ,product))
  }
  return (
    <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} Clicked={addProductToCart}>Add to cart</Button>
        </div>
    </div>
  )
}

export default ProductCard