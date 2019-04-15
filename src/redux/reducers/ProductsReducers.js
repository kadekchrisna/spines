const initial = {
    products: [],
    detail:{}
}
export default (state = initial, action) => {
    switch (action.type) {
        case 'GET_ALL_PRODUCTS_FULFILLED':
            // console.log(action.payload.data.data);
            
            return {
                products: action.payload.data.data
            }

        case 'GET_PRODUCT_FULFILLED':
            return{
                products: action.payload.data.data
            }

        default:
            return state;

    }
}
