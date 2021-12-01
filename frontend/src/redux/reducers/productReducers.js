export const productsReducer = (state = { cart: [], products: [], selected: {}, filtered: [], categories: [] }, { type, payload }) => {
    switch (type) {
        case 'SHOW_PRODUCTS':
            return {
                ...state,
                products: payload,
                filtered: payload,
                categories: [...new Set(payload.map(item => item.category))]
            }
        case 'SELECTED_PRODUCT':
            return {
                ...state,
                selected: payload
            }
        case 'ADD_TO_CART':
            const inCart = state.cart.some((item) => item.id === payload.id)

            if (inCart) {

                return {
                    ...state,
                    cart: state.cart.map((item) => inCart ? { ...item, quantity: item.quantity += payload.quantity } : item)
                }
            } else {
                return {
                    ...state,
                    cart: [...state.cart, payload]
                }
            }
        case 'QTY_PLUS':
            return {
                ...state,
                cart: state.cart.map(item => item.id === payload ? { ...item, quantity: item.quantity + 1 } : item)
            }
        case 'QTY_MINUS':
            return {
                ...state,
                cart: state.cart.map(item => item.id === payload ? { ...item, quantity: item.quantity - 1 } : item)
            }
        case 'DELETE_PRODUCT':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== payload)
            }
        case 'SEARCH_PRODUCT':
            return {
                ...state,
                filtered: state.products.filter(item => item.title.toLowerCase().trim().includes(payload.toLowerCase().trim()))
            }
        case 'FILTER_PRODUCT':

            return {
                ...state,
                filtered: state.products.filter(item => item.category === payload)
            }
        case 'SORT':
            return {
                ...state,
                filtered: state.filtered.sort((a, b) => (payload) ? (a.price > b.price ? 1 : -1) : (a.price < b.price ? 1 : -1))
            }
        /*  case 'CATEGORIES':
             return {
                 ...state,
                 categories: state.categories = [...new Set(state.products.map(item => item.category))]
             } */



        default:
            return state
    }
}