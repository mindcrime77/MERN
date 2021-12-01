import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import './HomeScreen.css'
import { useDispatch, useSelector } from 'react-redux'
import { showProducts, searchProduct, filterProduct, sortProducts } from '../redux/actions/productActions'
import Loading from '../components/Loading'

const HomeScreen = () => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.filtered)
    const categories = useSelector(state => state.products.categories)

    const { loading } = useSelector(state => state.loader)
    const [sort, setSort] = useState(false)

    useEffect(() => {
        dispatch(showProducts())

    }, [dispatch])


    const searchBar = (term) => {
        setSearch(term)
        dispatch(searchProduct(search))
    }

    const sortArray = (toggle) => {

        dispatch(sortProducts(toggle))
        setSort(!toggle)
    }

    const [actionClass, setActionClass] = useState(0)
    const [action, setAction] = useState(false)

    return (

        <div className='homescreen'>

            {!loading && <div className='homescreen_actions'>
                <i className='material-icons'
                    style={{ fontSize: '36px', transform: `rotate(${actionClass}deg)` }} onClick={() => {
                        setActionClass(actionClass + 180)
                        setAction(!action)
                    }}>font_download</i>
                <div className='search-box'>
                    <input className='search-txt' type="text" placeholder="Search.." name="search" value={search} onChange={(e) => searchBar(e.target.value)} onBlur={() => setSearch('')} />
                    <a className='search-btn' href='#'>
                        <i className="material-icons">search</i>
                    </a>
                </div>
                <div className={action ? 'homescreen_actions_left' : 'homescreen_actions_left_move'}>
                    <div className='box'>
                        <select onChange={(e) => dispatch(filterProduct(e.target.value))}>

                            {categories.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                    <div >
                        <button className='button-66' onClick={() => sortArray(sort)}>
                            {sort ? <i className="material-icons">arrow_drop_up</i> : <i className="material-icons">arrow_drop_down</i>}

                        </button>

                    </div>

                </div>
            </div>}


            {loading ? <Loading /> : (
                <div className='homescreen_products'>

                    {products.map(product => (
                        <Product product={product} key={product.id} />

                    ))}
                </div>
            )}

        </div>
    )
}

export default HomeScreen