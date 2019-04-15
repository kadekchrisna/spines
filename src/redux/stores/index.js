// import { createStore } from 'redux';

// import products from '../reducers/index';

// export const allProducts = createStore(products)


import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'

import counts from '../reducers/index';

export const abc = createStore(counts, {}, applyMiddleware(logger, promise))


