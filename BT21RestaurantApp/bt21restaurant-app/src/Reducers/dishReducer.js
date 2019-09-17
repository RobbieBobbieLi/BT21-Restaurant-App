import {GET_MENU_DISHES, GET_MENU_DISH, DELETE_DISH} from '../Actions/Types';

const initialState = {
    dishes: [],
    dish: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_MENU_DISHES:
            return{
                ...state,
                dishes: action.payload
            };
        case GET_MENU_DISH:
            return{
                ...state,
                dish: action.payload
            };
        case DELETE_DISH:
            return{
                ...state,
                dishes: state.dishes.filter(dish => dish.id !== action.payload)
            };
        default:
            return state;
    }
}