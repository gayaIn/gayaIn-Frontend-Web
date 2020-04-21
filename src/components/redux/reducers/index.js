import { combineReducers } from 'redux';

import products from './product';
import categorys from './category';
import user from './user';
import histories from './history'
import auth from './auth'

export default combineReducers({
  products,
  categorys,
  histories,
  user,
  auth
});
