import React, { useState } from 'react'
import './ProductScreen.css'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions/productActions'

const ProductScreen = () => {
    const dispatch = useDispatch()
    const product = useSelector(state => state.products.selected)
    let [qty, setQty] = useState(1)


    return (
        <div className='productscreen'>
            <div className='productscreen_left'>
                <div className='left_image'>
                    <img src={product.image} alt='product name' />
                </div>
                <div className='left_info'>
                    <p className='left_name'>{product.title}</p>
                    <p>Price: ${product.price}</p>
                    <p>{product.description}</p>
                </div>
            </div>
            <div className='productscreen_right'>
                <div className='right_info'>
                    <p>Price: <span>$499.99</span></p>
                    <p>Status: <span>In Stock</span></p>

                    <div className='productscreen_qty'>
                        <p>QTY:</p>
                        <button disabled={qty < 2} onClick={() => setQty(qty -= 1)}><i className="material-icons">chevron_left</i></button>
                        <p>{qty}</p>
                        <button onClick={() => setQty(qty += 1)}><i className="material-icons" >chevron_right</i></button>
                    </div>

                    <p>
                        <button onClick={() => dispatch(addToCart(product, qty))} >Add To Cart</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen