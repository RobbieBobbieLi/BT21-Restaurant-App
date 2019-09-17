import {combineReducers} from 'redux';
import errorsReducer from './errorsReducer';
import userReducer from './userReducer';
import dishReducer from './dishReducer';
import orderReducer from './orderReducer';

export default combineReducers({
    errors: errorsReducer,
    users: userReducer,
    dishes: dishReducer,
    orders: orderReducer
})