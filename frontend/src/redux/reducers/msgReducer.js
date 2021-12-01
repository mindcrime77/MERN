const initialState = {
    msgRegisterSuccess: '',
    msgRegisterFail: ''
}
export const msgReducer = (state = initialState, { type }) => {
    switch (type) {
        case 'MSG_SUCCESS':
            return {
                msgRegisterSuccess: 'Success register!'
            }
        case 'MSG_FAIL':
            return {
                msgRegisterFail: 'Registeration failed!'
            }
        case 'MSG_CLEAR':
            return {
                msgRegisterSuccess: '',
                msgRegisterFail: ''
            }
        default:
            return state
    }
}