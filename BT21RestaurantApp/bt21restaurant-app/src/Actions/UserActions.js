import axios from 'axios';
import {GET_ERRORS, GET_USER, GET_USER_BY_ID} from './Types';

export const addUser = (user, history) => async dispatch => {
    try{
        await axios.post("https://bt21restaurantapp.cfapps.io/", user);
        history.push("/");

        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch(error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
}

export const authUser = (user, history) => async dispatch => {
    try{
        const res = await axios.post("https://bt21restaurantapp.cfapps.io/authUser", 
            {username: user.username, password: user.password});
        history.push("/home");
            
        dispatch({
            type: GET_USER,
            payload: res.data
        });
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch(error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
}

export const getUserById = (user) => async dispatch => {
    try{
        const res = await axios.get(`https://bt21restaurantapp.cfapps.io/${user.id}`);

        dispatch({
            type: GET_USER_BY_ID,
            payload: res.data
        });
    } catch(error) {}
}