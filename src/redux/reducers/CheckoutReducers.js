
const initial = {
    checkout: [],
    isLoading: false
}
export default (state = initial, action) => {
    switch (action.type) {
        case 'ADD_CHECKOUT_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'ADD_CHECKOUT_FULFILLED':
            return {
                ...state,
                isLoading: false
            }

        case 'GET_CHECKOUT_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_CHECKOUT_FULFILLED':
            return {
                ...state,
                checkout: action.payload.data.data,
                isLoading: false
            }
        default:
            return state;

    }
}
