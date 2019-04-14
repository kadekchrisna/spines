import { combineReducers } from 'redux';

import products from './ProductsReducers'
import numbers from './Numbers'

export default combineReducers({products, numbers})
