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
export const addToCart = (idProduct, price, id, authToken) => {
    return {
        type: 'ADD_TO_CART',
        payload: axios.post(`${BASE_URL}carts/`, {
            'user_id': id,
            'product_id': idProduct,
            'product_qty': 1,
            'total': price
        }, {
                headers: {
                    Authorization: authToken
                }
            })
    }

}
export const getAllCart = (id, authToken) => {
    return {
        type: 'GET_ALL_CART',
        payload: axios.get(`${BASE_URL}carts/${id}`, {
            headers: {
                Authorization: authToken
            }
        })
    }

}
export const incrementQty = (id, qty, authToken) => {
    return {
        type: 'INCREMENT_QTY',
        payload: axios.patch(`${BASE_URL}carts/${id}`, {
            qty: qty
        },{
            headers: {
                Authorization: authToken
            }
        })
    }

}

export const decrementQty = (id, qty, authToken) => {
    if (qty > 0) {
        const quantity = qty

        return {
            type: 'DECREMENT_QTY',
            payload: axios.patch(`${BASE_URL}carts/${id}`, {
                qty: quantity
            },{
                headers:{
                    Authorization: authToken
                }
            })
        }
    } else {
        return {
            type: 'DELETE_ITEM',
            payload: axios.delete(`${BASE_URL}carts/${id}`,{
                headers:{
                    Authorization: authToken
                }
            })
        }
    }
}

export const inputQty = (id, text, authToken) => {
    if (!isNaN(Number(text))) {
        const qty = Number(text);
        return {
            type: 'INCREMENT_QTY',
            payload: axios.patch(`${BASE_URL}carts/${id}`, {
                qty: qty
            },{
                headers:{
                    Authorization: authToken
                }
            })
        }

    } else {
        const qty = 0
        return {
            type: 'INCREMENT_QTY',
            payload: axios.patch(`${BASE_URL}carts/${id}`, {
                qty: qty
            },{
                headers:{
                    Authorization: authToken
                }
            })
        }

    }

}
export const deleteItem = (id, authToken) => {
    return {
        type: 'DELETE_ITEM',
        payload: axios.delete(`${BASE_URL}carts/${id}`,{
            headers:{
                Authorization: authToken
            }
        })
    }

}

//Account
export const registerUser = (username, email, password) => {
    return {
        type: 'REGISTER_USER',
        payload: axios.post(`${BASE_URL}auth/register/`, {
            'username': username,
            'email': email,
            'password': password
        })
    }

}

export const loginUser = (email, password) => {
    return {
        type: 'LOGIN_USER',
        payload: axios.post(`${BASE_URL}auth/login/`, {
            'email': email,
            'password': password
        })
    }

}

export const getUserData = (token) => {
    return {
        type: 'GET_USER',
        payload: axios.get(`${BASE_URL}user/data`, {
            headers: {
                Authorization: token
            }
        })
    }

}
export const clearUser = () => {
    return {
        type: 'CLEAR_USER'
    }

}

//Categories
export const getAllCategories = () => {
    return {
        type: 'GET_ALL_CATEGORIES',
        payload: axios.get(`${BASE_URL}category`)
    }

}
export const getProductByCat = (id) => {
    return {
        type: 'GET_PRODUCT_BY_CAT',
        payload: axios.get(`${BASE_URL}category/${id}`)
    }

}

//Checkout
export const addToCheckout = (user_id, province, city, address, phone, courier, bill) => {
    return {
        type: 'ADD_CHECKOUT',
        payload: axios.post(`${BASE_URL}checkout`, {
            "user_id":  user_id,
            "province": province, 
            "city": city, 
            "address": address, 
            "phone": phone, 
            "courier": courier, 
            "bill": bill
        })
    }

}
export const getCheckout = (id) => {
    return {
        type: 'GET_CHECKOUT',
        payload: axios.get(`${BASE_URL}checkout/${id}`)
    }

}
