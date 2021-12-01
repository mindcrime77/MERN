import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { selectedProduct } from '../redux/actions/productActions'
import './Product.css'


const Product = ({ product }) => {
    const dispatch = useDispatch()
    return (
        <div className='product'>
            <img src={product.image} alt='' />
            <div className='product_info'>
                <p className='info_name'>{product.title}</p>
                <p className='info_description'>
                    {product.description}
                </p>
                <p className='info_price'>
                    ${product.price}
                </p>
                <Link to={`/product/${product.id}`} ><button className='info_button' onClick={() => dispatch(selectedProduct(product))}>View</button></Link>
            </div>
        </div>
    )
}

export default Product