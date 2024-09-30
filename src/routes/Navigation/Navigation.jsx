import React, { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import {ReactComponent as Baglogo} from '../../assets/Baglogo.svg'
import { UserContext } from '../../contexts/user_context'
import { CartContext } from '../../contexts/cart'

import CartIcon from '../../components/cart-icon/cart-icon'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown'
import './Navigation.scss'
import { signOutUser } from '../../utils/firebase/firebase'



const Navigation = () => {
  const {currentUser} = useContext(UserContext)
  const {isCartOpen} = useContext(CartContext)

  const signOutHandler = async() =>{
    await signOutUser();
  }
    return(
      <Fragment>
        <h1>Navigation Panel</h1>
        <div className='navigation'>
          <Link className='logo-container' to="/">
          <Baglogo className='logo'/>
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>Shop</Link>
            {
              currentUser ? ( <span className='nav-link' onClick={signOutHandler}>Sign out</span>) :( 
                <Link className='nav-link' to='/auth'>Sign in</Link>)
            }
            <CartIcon/>
          </div>
            {isCartOpen && <CartDropdown/>}
        </div>
        <Outlet/>
      </Fragment>
    )
  }
  

export default Navigation
