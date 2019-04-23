import { combineReducers } from 'redux';

import products from './ProductsReducers'
import numbers from './Numbers'
import account from './AccountReducers'
import category from './CategoryReducers'
import checkout from './CheckoutReducers'

export default combineReducers({products, numbers, account, category, checkout})
