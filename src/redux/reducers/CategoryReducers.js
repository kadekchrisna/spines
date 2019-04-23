
const initial = {
    categories: [],
    productsCat: []
}
export default (state = initial, action) => {
    switch (action.type) {
        case 'GET_ALL_CATEGORIES_FULFILLED':
            // setValue('token', JSON.stringify(action.payload.data.access_token))
            // console.log(action.payload.data.data);
            return {
                ...state,
                categories: action.payload.data.data
            }
        case 'GET_PRODUCT_BY_CAT_FULFILLED':
            // setValue('token', JSON.stringify(action.payload.data.access_token))
            // console.log(action.payload.data.data);
            return {
                ...state,
                productsCat: action.payload.data.data
            }
        default:
            return state;

    }
}
