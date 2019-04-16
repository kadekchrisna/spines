import axios from 'axios';
import { BASE_URL } from 'react-native-dotenv';

//Product
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

//Cart
export const addToCart = (id, price) => {
    return {
        type: 'ADD_TO_CART',
        payload: axios.post(`${BASE_URL}carts/`, {
            'user_id': 1,
            'product_id': id,
            'product_qty': 1,
            'total' : price
        })
    }

}
export const getAllCart = () => {
    return {
        type: 'GET_ALL_CART',
        payload: axios.get(`${BASE_URL}carts/1`)
    }

}
export const incrementQty = (id, qty) => {
    return {
        type: 'INCREMENT_QTY',
        payload:  axios.patch(`${BASE_URL}carts/${id}`, {
            qty: qty
        })
    }

}

export const decrementQty = (id, qty) => {
    if (qty > 0) {
        const quantity = qty

        return {
            type: 'DECREMENT_QTY',
            payload: axios.patch(`${BASE_URL}carts/${id}`, {
                qty: quantity
            })
        }
    } else {
        const quantity = 1

        return {
            type: 'DECREMENT_QTY',
            payload: axios.patch(`${BASE_URL}carts/${id}`, {
                qty: quantity
            })
        }
    }
}

export const inputQty = (id, text) => {
    if (!isNaN(Number(text))) {
        const qty = Number(text);
        return {
            type: 'INCREMENT_QTY',
            payload:  axios.patch(`${BASE_URL}carts/${id}`, {
                qty: qty
            })
        }
        
    } else {
        const qty = 0
        return {
            type: 'INCREMENT_QTY',
            payload:  axios.patch(`${BASE_URL}carts/${id}`, {
                qty: qty
            })
        }
        
    }

}
export const deleteItem = (id) => {
    return {
        type: 'DELETE_ITEM',
        payload: axios.delete(`${BASE_URL}carts/${id}`)
    }

}

//Account
export const registerUser = (username, email, password) => {
    return {
        type: 'REGISTER_USER',
        payload: axios.post(`${BASE_URL}auth/register/`, {
            'username': username,
            'email': email,
            'password' : password
        })
    }

}

export const loginUser = (email, password) => {
    return {
        type: 'LOGIN_USER',
        payload: axios.post(`${BASE_URL}auth/login/`, {
            'email': email,
            'password' : password
        })
    }

}