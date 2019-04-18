const initial = {
    products: [],
    carts: [],
    detail: {},
    total: 0,
    isLoading: false
}
export default (state = initial, action) => {
    switch (action.type) {
        //Product
        case 'GET_ALL_PRODUCTS_PENDING':
            // console.log(action.payload.data.data);
            return {
                ...state,
                isLoading: true
            }
        case 'GET_ALL_PRODUCTS_FULFILLED':
            // console.log(action.payload.data.data);
            return {
                ...state,
                products: action.payload.data.data,
                isLoading: false
            }

        case 'GET_PRODUCT_PENDING':
            return {
                ...state,
                isLoading: true
            }

        case 'GET_PRODUCT_FULFILLED':
            return {
                ...state,
                detail: action.payload.data.data,
                isLoading: false
            }


        //Cart    
        case 'GET_ALL_CART_FULFILLED':
            // console.log(action.payload.data.data);
            return {
                ...state,
                carts: action.payload.data.data,
                total: action.payload.data.total,
                isLoading: false
            }

        case 'INCREMENT_QTY_FULFILLED':
            // console.log(action.payload.data.data.name);
            const newIncCarts = state.carts.map((val) => {
                if (val.id === action.payload.data.data.id) {
                    return action.payload.data.data
                } else {
                    return val
                }
            })
            // console.log(action.payload.data.data.id);
            return {

                ...state,
                carts: newIncCarts,
                total: action.payload.data.total
            }
        case 'DECREMENT_QTY_FULFILLED':
            const newDecCarts = state.carts.map((val) => {
                if (val.id === action.payload.data.data.id) {
                    return action.payload.data.data
                } else {
                    return val
                }
            })
            // console.log(action.payload.data.data.id);
            return {

                ...state,
                carts: newDecCarts,
                total: action.payload.data.total
            }

        case 'DELETE_ITEM_PENDING':
            // console.log(action.payload.data.data.id);
            return {
                ...state,
                isLoading: true
            }
        case 'DELETE_ITEM_FULFILLED':
            // console.log(action.payload.data.data.id);
            return {
                ...state,
                carts: action.payload.data.data,
                total: action.payload.data.total,
                isLoading: false
            }

        default:
            return state;

    }
}
