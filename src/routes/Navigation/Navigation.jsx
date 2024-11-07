import React, { Fragment, useContext } from 'react'
import {  Outlet } from 'react-router-dom'
import { ReactComponent as Baglogo } from '../../assets/Baglogo.svg'
import { UserContext } from '../../contexts/user_context'
import { CartContext } from '../../contexts/cart'

import CartIcon from '../../components/cart-icon/cart-icon'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown'
// import './Navigation.scss'
import { NavigationContainer, LogoContainer, NavLink, NavLinks, Logo } from './Navigation_style'
import { signOutUser } from '../../utils/firebase/firebase'



const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

  const signOutHandler = async () => {
    await signOutUser();
  }
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo>
            <Baglogo/>
          </Logo>
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>Shop</NavLink>
          {
            currentUser ? (<NavLink as='span' onClick={signOutHandler}>Sign out</NavLink>) : (
              <NavLink to='/auth'>Sign in</NavLink>)
          }
          <NavLink to='/checkout'>Checkout</NavLink>
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}


export default Navigation
