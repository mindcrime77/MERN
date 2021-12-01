const initialState = {}
export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'LOGIN_REQUEST':
            return {

                loading: true,
                isAuth: false
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loading: false,
                isAuth: true,
                user: payload
            }
        case 'LOGIN_FAIL':
            return {
                ...state,
                loading: true,
                isAuth: false,
                user: null,
                error: payload
            }
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                user: payload
            }
        case 'REGISTER_FAIL':
            return {
                ...state,

                user: null,
                error: payload
            }
        case 'CLEAR_ERROR':
            return {
                ...state,
                error: ''
            }
        case 'LOGOUT':
            return {

            }
        default:
            return state
    }
}