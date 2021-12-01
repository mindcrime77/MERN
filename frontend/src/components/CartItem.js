import React from 'react'
import { useDispatch } from 'react-redux'
import { qtyPlus, qtyMinus, deleteProduct } from '../redux/actions/productActions'
import './CartItem.css'

const CartItem = ({ item }) => {
    const dispatch = useDispatch()
    return (
        <tr className='cart-item'>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.category}</td>
            <td style={{ display: 'flex' }}>
                <button disabled={item.quantity < 2} onClick={() => dispatch(qtyMinus(item.id))}><i className="material-icons" >chevron_left</i></button>
                <p>{item.quantity}</p>
                <button onClick={() => dispatch(qtyPlus(item.id))}><i className="material-icons" >chevron_right</i></button>
            </td>

            <td>${item.price * item.quantity}</td>
            <td><i className="material-icons" onClick={() => dispatch(deleteProduct(item.id))} style={{ cursor: 'pointer' }}>delete</i></td>
        </tr>

    )
}

export default CartItem