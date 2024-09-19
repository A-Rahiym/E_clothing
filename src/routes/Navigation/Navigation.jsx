import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'
import {ReactComponent as Baglogo} from '../../assets/Baglogo.svg'
import './Navigation.scss'

const Navigation = () => {
    return(
      <Fragment>
        <h1>Navigation Panel</h1>
        <div className='navigation'>
          <Link className='logo-container' to="/">
          <Baglogo className='logo'/>
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>Shop</Link>
            <Link className='nav-link' to='/auth'>Sign in</Link>
          </div>
        </div>
        <Outlet/>
      </Fragment>
    )
  }
  

export default Navigation
