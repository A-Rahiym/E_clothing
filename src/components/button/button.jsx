import React, { Children } from 'react'
import './button.scss'


const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
}


const Button = ({children, buttonType,Clicked, ...otherProps}) => {
  return ( <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps} onClick={Clicked}>{children}</button> )
}

export default Button
