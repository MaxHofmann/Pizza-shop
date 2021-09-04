import { combineReducers } from 'redux';

import filters from './filters';
import product from './product';
import cart from './cart';

const rootReducer = combineReducers({
  filters,
  product,
  cart,
});

export default rootReducer;
