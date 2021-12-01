import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { logout } from '../redux/actions/userActions'

import './Navbar.css'
const Navbar = ({ click }) => {
    const history = useHistory()
    const dispatch = useDispatch()

    const { cart } = useSelector(state => state.products)
    const { user, isAuth } = useSelector(state => state.user)
    const logMeOut = () => {
        dispatch(logout())
        history.push('/')
    }

    return (
        <nav className='navbar'>
            <div className='navbar_logo'>
                <h2>MERN Shopping Cart</h2>

            </div>
            {!isAuth && <div className='navbar_logo_mobile new'>

                <h2>Please log in to proceed...</h2>
            </div>}
            {isAuth && <><ul className='navbar_links'>
                <div className='dropdown'>
                    <button className='dropbtn' style={{ color: 'white' }}>{user?.user?.email || localStorage.getItem('user')}</button>
                    <div className='dropdown-content'>
                        <a href='#' onClick={() => logMeOut()}>logout</a>
                    </div>
                </div>
                <li className={cart.length === 0 ? 'noclick' : ''}>
                    <Link to='/cart' className='cart_link'>
                        <i className='fas fa-shopping-cart'></i>
                        <span>
                            Cart
                            <span className='cartlogo_badge'>{cart.length}</span>
                        </span>
                    </Link>
                </li>

            </ul>
                <div className='hamburger_menu' onClick={click}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </>}
        </nav>
    )

}

export default Navbar