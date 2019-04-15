const initial = {
    products: [],
    carts: [],
    total: 0
}
export default (state = initial, action) => {
    switch (action.type) {
        case 'GET_ALL_PRODUCTS_FULFILLED':
            // console.log(action.payload.data.data);
            return {
                products: action.payload.data.data
            }

        case 'GET_PRODUCT_FULFILLED':
            return {
                products: action.payload.data.data
            }
            
        case 'GET_ALL_CART_FULFILLED':
            // console.log(action.payload.data.data);
            return {
                carts: action.payload.data.data,
                total: action.payload.data.total
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
                carts: newDecCarts,
                total: action.payload.data.total
            }

        case 'DELETE_ITEM_FULFILLED':
            // console.log(action.payload.data.data.id);
            return {
                carts: action.payload.data.data,
                total: action.payload.data.total
            }

        default:
            return state;

    }
}
