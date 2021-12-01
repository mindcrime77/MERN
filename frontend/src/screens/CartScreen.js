import React from 'react'
import CartItem from '../components/CartItem'
import './CartScreen.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CartScreen = () => {
    const { cart } = useSelector(state => state.products)
    let total = cart.reduce((total, item) => {
        total.totalItems += item.quantity
        total.cartTotal += item.quantity * item.price
        return total
    }, {
        totalItems: 0,
        cartTotal: 0
    })

    return (
        <>
            {cart.length === 0 && <h1 id='overlay'>The cart is empty. Proceed to <Link to='/'>product</Link> page</h1>}
            {cart.length > 0 && <table className='content-table'>

                <tbody>
                    <tr>
                        <th>#ID</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th colSpan='2'>Price</th>
                    </tr>
                    {cart.map(item => <CartItem item={item} key={item.id} />)}

                    <tr>
                        <td colSpan='3' rowSpan='2'></td>
                        <td>Total Quantity</td>
                        <td>Total Price</td>
                    </tr>
                    <tr>

                        <td>{total.totalItems}</td>
                        <td colSpan='2'>{total.cartTotal}</td>
                    </tr>
                </tbody>
            </table>}
        </>
    )
}

export default CartScreen