import axios from 'axios';
import {GET_ERRORS, GET_MENU_DISHES, GET_MENU_DISH, DELETE_DISH} from './Types';

export const newDish = (dish, history) => async dispatch => {
    try{
        await axios.post("https://bt21restaurantapp.cfapps.io/dishes", dish);
        history.push("/home");

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

export const updateDish = (dish, dish_id, history) => async dispatch => {
    try{
        await axios.post(`https://bt21restaurantapp.cfapps.io/dishes/updateDish/${dish_id}`, dish);
        history.push("/home");

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

export const getMenuDishes = () => async dispatch => {
    const res = await axios.get("https://bt21restaurantapp.cfapps.io/dishes/allDishes");

    dispatch({
        type: GET_MENU_DISHES,
        payload: res.data
    });
}

export const getMenuDish = (dish_id) => async dispatch => {
    try{
        const res = await axios.get(`https://bt21restaurantapp.cfapps.io/dishes/${dish_id}`);

        dispatch({
            type: GET_MENU_DISH,
            payload: res.data
        });
    } catch(error) {}
}

export const deleteDish = (dish_id) => async dispatch => {
    if (window.confirm(`Confirm deletion of Dish #${dish_id}? This action cannot be undone!`)) {
        await axios.delete(`https://bt21restaurantapp.cfapps.io/dishes/${dish_id}`);

        dispatch({
            type: DELETE_DISH,
            payload: dish_id
        });
    }
}