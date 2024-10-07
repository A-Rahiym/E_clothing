import './CheckoutCard.scss'


import React from 'react'

const CheckoutCard = ({ product }) => {
    const { name, quantity, price } = product;
    return (
        <div className='checkoutCard-Container'>
            <h2>{name}</h2>
            <span>{price} x {quantity}</span>
        </div>
    )
}

export default CheckoutCard;