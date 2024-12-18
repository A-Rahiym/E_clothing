import React, { Children } from 'react'
import { BaseButton, GoogleSignInButton, InvertedButton } from './button._style'



export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
  {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton
  }[buttonType]);


const Button = ({ children, buttonType, Clicked, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (<CustomButton {...otherProps} onClick={Clicked}>
    {children}
  </CustomButton>)
}

export default Button
