import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {updateOrder} from '../../Actions/OrderActions';
import CheckoutItem from './CheckoutItem';

class Checkout extends Component {
    onCheckout(e) {
        e.preventDefault();

        const {user} = this.props.user;
        const {orders} = this.props.orders;

        let checkoutOrders = [];

        for (let i = 0; i < orders.length; i++) {
            if (orders[i].customerId === user.id) {
                checkoutOrders.push(orders[i]);
            }
        }

        this.props.updateOrder(checkoutOrders, this.props.history);
    }

    render() {
        const {user} = this.props.user;
        const {dishes} = this.props.dishes;
        const {orders} = this.props.orders;

        let userContent;
        let checkoutContent;
        let checkoutContentOrders = [];
        let checkoutContentMenu = [];
        let checkoutContentDishes = [];
        let checkoutPrice = 0;

        const checkoutContentAlg = (orders, dishes) => {
            for (let i = 0; i < dishes.length; i++) {
                checkoutContentMenu.push(dishes[i]);
            }

            const check = orders.map(order => (
                <CheckoutItem key = {order.id} order = {order} menu = {checkoutContentMenu}/>
            ));

            for (let i = 0; i < check.length; i++) {
                if (check[i].props.order.customerId === user.id && check[i].props.order.status === "Ordered") {
                    checkoutContentOrders.push(check[i]);
                }
            }

            if (checkoutContentOrders.length < 1) {
                return(
                    <div className = "Container">
                        <p className = "Paragraph Text">No orders yet! Go back and go order something!</p>
                        <Link className = "Menu Button Link" to = "/menu">
                            <button className = "Menu Button">Menu</button>
                        </Link>
                    </div>
                );
            } else {
                for (let i = 0; i < checkoutContentOrders.length; i++) {
                    for (let j = 0; j < dishes.length; j++) {
                        if (checkoutContentOrders[i].props.order.dishId === dishes[j].id) {
                            checkoutContentDishes.push(dishes[j]);
                        }
                    }
                }

                for (let i = 0; i < checkoutContentDishes.length; i++) {
                    checkoutPrice = checkoutPrice + checkoutContentDishes[i].price;
                }

                return(
                    <div className = "Container">
                        {checkoutContentOrders}
                        <h3 className = "Header Text">Balance: ${checkoutPrice}</h3>
                        <button className = "Pay Button" onClick = {this.onCheckout.bind(this)}>Pay</button>
                    </div>
                );
            }
        }

        checkoutContent = checkoutContentAlg(orders, dishes);

        const userAlg = user => {
            if (!user.userType) {
                return(
                    <div className = "Checkout Page">
                        <h2 className = "Header Text">You are not logged in!</h2>
                        <p className = "Paragraph Text">Please sign in to continue!</p>
                        <Link className = "Home Button Link" to = "/">
                            <button className = "Home Button">Home</button>
                        </Link><br/><hr/>
                    </div>
                );
            } else {
                return(
                    <div className = "Checkout Page">
                        <p className = "Paragraph Text">Still hungry??</p>
                        <Link className = "Back Button Link" to = "/home">
                            <button className = "Back Button">Back</button>
                        </Link><br/><hr/>
                        <h2 className = "Header Text">How was your meal {user.username}?</h2>
                        <h3 className = "Header Text">Ordered:</h3>
                        {checkoutContent}
                    </div>
                );
            }
        };

        userContent = userAlg(user);

        return(
            <div className = "Container">{userContent}</div>
        );
    }
}

Checkout.propTypes = {
    updateOrder: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    user: state.users,
    dishes: state.dishes,
    orders: state.orders
})

export default connect(mapStateToProps, {updateOrder})(Checkout);