import {GET_MENU_ORDERS, GET_MENU_ORDER} from '../Actions/Types';

const initialState = {
    orders: [],
    order: {},
    orderDish: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_MENU_ORDERS:
            return{
                ...state,
                orders: action.payload
            };
        case GET_MENU_ORDER:
            return{
                ...state,
                orderDish: action.payload
            };
        default:
            return state;
    }
}