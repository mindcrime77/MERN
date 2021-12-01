import axios from 'axios'
export const showProducts = () => {
    return async function (dispatch) {
        dispatch({ type: 'START_LOADER' })
        const { data } = await axios.get('https://fakestoreapi.com/products')
        dispatch({
            type: 'SHOW_PRODUCTS',
            payload: data
        })
        dispatch({ type: 'STOP_LOADER' })
    }
}
export const selectedProduct = (product) => {
    return function (dispatch) {
        dispatch({
            type: 'SELECTED_PRODUCT',
            payload: product
        })
    }
}

export const addToCart = (product, quantity) => {
    return async function (dispatch, getState) {
        dispatch({
            type: 'ADD_TO_CART',
            payload: { ...product, quantity }
        })
        const { cart } = getState().products
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}
export const qtyPlus = (id) => {
    return async function (dispatch) {
        dispatch({
            type: 'QTY_PLUS',
            payload: id
        })
    }
}
export const qtyMinus = (id) => {
    return async function (dispatch) {
        dispatch({
            type: 'QTY_MINUS',
            payload: id
        })
    }
}
export const deleteProduct = id => dispatch => {
    dispatch({
        type: 'DELETE_PRODUCT',
        payload: id
    })
}
export const searchProduct = (search) => (dispatch) => {
    dispatch({
        type: 'SEARCH_PRODUCT',
        payload: search
    })
}
export const filterProduct = (category) => (dispatch) => {
    dispatch({
        type: 'FILTER_PRODUCT',
        payload: category
    })
}
export const sortProducts = (toggle) => (dispatch) => {
    dispatch({
        type: 'SORT',
        payload: toggle
    })

}
/* export const getCategories = () => (dispatch) => {
    dispatch({
        type: 'CATEGORIES'

    })
} */
