import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { 
      menuListReducer ,
      itemDetailsReducer,
      menuCreateReducer,
} from './reducers/menureducers';
import { orderReducer } from './reducers/orderreducers';
import { 
       userSigninReducer,
       userSignupReducer, 
       userDetailsReducer,
} from './reducers/userReducers';

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
          ? JSON.parse(localStorage.getItem('userInfo'))
          : null,
        },
    order: {
        orderItems: localStorage.getItem('orderItems')
          ? JSON.parse(localStorage.getItem('orderItems'))
          : [],
        },
};

const reducer = combineReducers({
  menuList: menuListReducer,
  itemdetail:itemDetailsReducer,
  userSignin: userSigninReducer,
  userSignup: userSignupReducer,
  userDetails: userDetailsReducer,
  menuCreate: menuCreateReducer,
  order:orderReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;