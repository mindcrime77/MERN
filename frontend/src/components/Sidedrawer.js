import React from 'react'
import './Sidedrawer.css'
import { Link } from 'react-router-dom'
import Mobile from './Mobile'
import { useSelector } from 'react-redux'

const Sidedrawer = ({ show, click }) => {
    const { cart } = useSelector(state => state.products)
    const sideDrawerClass = ['sidedrawer']
    if (show) {
        sideDrawerClass.push('show')
    }
    return (
        <div className={sideDrawerClass.join(' ')}>
            <div className='sidedrawer_cart'>
                {cart.map(item => <Mobile item={item} key={item.id} />)}
            </div>
            <ul className='sidedrawer_links' onClick={click}>
                <li>
                    <Link to='/cart'>
                        <i className='fas fa-shopping-cart'></i>
                        <span>
                            Cart <span className='sidedrawer_cartbadge'>{cart.length}</span>

                        </span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        Shop
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidedrawer