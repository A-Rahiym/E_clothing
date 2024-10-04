import React from 'react'
import Button from '../button/button.jsx'
import './Product-card.scss'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.jsx' 

const ProductCard = ({product}) => {
  const {name, price , imageUrl} = product;
  const {addItemToCart} = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product)
  return (
    <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`} />
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
            <Button buttonType={'inverted'} Clicked={addProductToCart}>Add to cart</Button>
        </div>
    </div>
  )
}

export default ProductCard