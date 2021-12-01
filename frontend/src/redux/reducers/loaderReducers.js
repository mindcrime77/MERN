const initialState = {
    loading: null
}
export const loaderReducer = (state = initialState, { type }) => {
    switch (type) {
        case 'START_LOADER':
            return {
                loading: true,
            }
        case 'STOP_LOADER':
            return {
                loading: false,
            }
        default:
            return state
    }
}