import axios from 'axios'
export const userLogin = (email, password) => {
    return async function (dispatch, getState) {
        dispatch({ type: 'LOGIN_REQUEST' })
        try {

            const { data } = await axios.post('http://localhost:5000/user/login', { email, password })

            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: data
            })
            localStorage.setItem('user-token', getState().user.user.token)
            localStorage.setItem('user', email)

        } catch (error) {
            dispatch({
                type: 'LOGIN_FAIL',
                payload: error.response.data.msg
            })

        }
    }
}

export const registerUser = (email, password, repeat) => {
    return async function (dispatch) {
        try {
            const { data } = await axios.post('http://localhost:5000/user/register', { email, password, repeat })
            dispatch({ type: 'MSG_SUCCESS' })
            dispatch({
                type: 'REGISTER_SUCCESS',
                payload: data
            })
        } catch (error) {
            dispatch({ type: 'MSG_FAIL' })
            dispatch({
                type: 'REGISTER_FAIL',
                payload: error.response.data.msg
            })

        }
    }
}

export const clearError = () => {
    return async function (dispatch) {
        dispatch({ type: 'CLEAR_ERROR' })
    }
}

export const logout = () => {
    return async function (dispatch) {
        dispatch({ type: 'LOGOUT' })
        localStorage.clear()

    }
}


