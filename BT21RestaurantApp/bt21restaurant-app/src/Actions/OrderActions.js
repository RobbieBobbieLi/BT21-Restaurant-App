import axios from 'axios';
import {GET_MENU_ORDERS, GET_MENU_ORDER} from './Types';

export const orderDish = (order, dishName, history) => async () => {
    if (window.confirm(`Confrim Order of ${dishName}?`)) {
        await axios.post("https://bt21restaurantapp.cfapps.io/orders", order);
        history.push("/home");
    }
}

export const updateOrder = (orders, history) => async () => {
    for (let i = 0; i < orders.length; i++) {
        await axios.post(`https://bt21restaurantapp.cfapps.io/orders/updateOrder/${orders[i].id}`, orders[i].id);
    }

    history.push("/");
}

export const getMenuOrders = () => async dispatch => {
    const res = await axios.get("https://bt21restaurantapp.cfapps.io/orders/allOrders");

    dispatch({
        type: GET_MENU_ORDERS,
        payload: res.data
    });
}

export const getMenuDish = (dish_id) => async dispatch => {
    try{
        const res = await axios.get(`https://bt21restaurantapp.cfapps.io/orders/${dish_id}`);

        dispatch({
            type: GET_MENU_ORDER,
            payload: res.data
        });
    }  catch(error) {}
}