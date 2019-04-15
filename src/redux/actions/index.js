import axios from 'axios';
import { BASE_URL } from 'react-native-dotenv';

export const getAll = () => {
    return {
        type: 'GET_ALL_PRODUCTS',
        payload: axios.get(`${BASE_URL}products`)
    }

}
export const getProduct = (id) => {
    return {
        type: 'GET_PRODUCT',
        payload: axios.get(`${BASE_URL}products/${id}`)
    }

}
export const increment = () => {
    return {
        type: 'INCREMENT'
    }

}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }

}
axios.get(`${BASE_URL}products`)
                .then((response) => {
                    // console.log(response.data);
                    return {
                        products: response.data.data
        
                    }        
                    // console.log(this.state.products);
                })
                .catch((error) => {
                    console.log(error);
                });
            