import { combineReducers } from 'redux';

import products from './ProductsReducers'
import numbers from './Numbers'
import account from './AccountReducers'

export default combineReducers({products, numbers, account})
