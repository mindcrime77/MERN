export const msgSuccessAction = () => dispatch => {
    dispatch({
        type: 'MSG_SUCCESS'
    })
}

export const msgFailAction = () => dispatch => {
    dispatch({
        type: 'MSG_FAIL'
    })
}

export const msgClear = () => dispatch => {
    dispatch({
        type: 'MSG_CLEAR'
    })
}