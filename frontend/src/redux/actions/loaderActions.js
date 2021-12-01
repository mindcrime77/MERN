export const startLoader = () => dispatch => {
    dispatch({ type: 'START_LOADER' })
}
export const stopLoader = () => dispatch => {
    dispatch({ type: 'STOP_LOADER' })
}