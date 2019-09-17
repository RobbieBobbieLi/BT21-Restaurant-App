import {GET_USER, GET_USER_BY_ID} from '../Actions/Types';

const initialState = {
    user: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_USER:
            return{
                ...state,
                user: action.payload
            };
        case GET_USER_BY_ID:
            return{
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}