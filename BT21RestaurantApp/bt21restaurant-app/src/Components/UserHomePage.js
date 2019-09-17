import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getUserById} from '../Actions/UserActions';
import {getMenuDishes} from '../Actions/DishActions';
import {getMenuOrders} from '../Actions/OrderActions';
import DishItem from './Chef/DishItem';
import OrderItem from './Customer/OrderItem';

class UserHomePage extends Component {
    componentDidMount() {
        this.props.getUserById();
        this.props.getMenuDishes();
        this.props.getMenuOrders();
    }

    render() {
        const {user} = this.props.user;
        const {dishes} = this.props.dishes;
        const {orders} = this.props.orders;

        let userContent;
        let chefContent;
        let chefContentDishes = [];
        let customerContent;
        let customerContentOrders = [];
        let customerContentMenu = [];

        const chefContentAlg = dishes => {
            if (dishes.length < 1) {
                return(
                    <div className = "Container">
                        <h1 className = "Header Text">Menu</h1>
                        <p className = "Paragraph Text">Empty Menu!</p>
                    </div>
                );
            } else {
                const dishs = dishes.map(dish => (
                    <DishItem key = {dish.id} dish = {dish}/>
                ));

                for (let i = 0; i < dishs.length; i++) {
                    chefContentDishes.push(dishs[i]);
                }
            }

            return(
                <div className = "Container">
                    <h1 className = "Header Text">Menu</h1>
                    {chefContentDishes}
                </div>
            );
        };

        chefContent = chefContentAlg(dishes);

        const customerContentAlg = (orders, dishes) => {
            if (orders.length < 1) {
                return(
                    <div className = "Container">
                        <h1 className = "Header Text">Orders</h1>
                        <p className = "Paragraph Text">No orders yet! Order something!</p>
                    </div>
                );
            } else {
                for (let i = 0; i < dishes.length; i++) {
                    customerContentMenu.push(dishes[i]);
                }

                const ordrs = orders.map(order => (
                    <OrderItem key = {order.id} order = {order} menu = {customerContentMenu}/>
                ));

                for (let i = 0; i < ordrs.length; i++) {
                    if (ordrs[i].props.order.customerId === user.id && ordrs[i].props.order.status === "Ordered") {
                        customerContentOrders.push(ordrs[i]);
                    }
                }
            }

            return(
                <div className = "Container">
                    <h1 className = "Header Text">Orders</h1>
                    {customerContentOrders}
                </div>
            );
        };

        customerContent = customerContentAlg(orders, dishes);

        const userAlg = user => {
            if (!user.userType) {
                return(
                    <div className = "User Home Page">
                        <h2 className = "Header Text">You are not logged in!</h2>
                        <p className = "Paragraph Text">Please sign in to continue!</p>
                        <Link className = "Home Button Link" to = "/">
                            <button className = "Home Button">Home</button>
                        </Link><br/><hr/>
                    </div>
                );
            } else {
                if (user.userType === "Chef") {
                    return(
                        <div className = "User Home Page">
                            <h2 className = "Header Text">Welcome {user.username}!</h2>
                            <h3 className = "Header Text">Logged in as:</h3>
                            <p className = "Paragraph Text">User Id: {user.id}</p>
                            <p className = "Paragraph Text">Username: {user.username}</p>
                            <p className = "Paragraph Text">User Type: {user.userType}</p>
                            <h3 className = "Header Text">Add dish to menu:</h3>
                            <Link className = "Add Dish Button Link" to = "/newDish">
                                <button className = "Add Dish Button">Add Dish</button>
                            </Link><br/><hr/>
                            {chefContent}
                        </div>
                    );
                } else {
                    return(
                        <div className = "User Home Page">
                            <h2 className = "Header Text">Welcome {user.username}!</h2>
                            <h3 className = "Header Text">Logged in as:</h3>
                            <p className = "Paragraph Text">User Id: {user.id}</p>
                            <p className = "Paragraph Text">Username: {user.username}</p>
                            <p className = "Paragraph Text">User Type: {user.userType}</p>
                            <h3 className = "Header Text">Hungry? Order here!</h3>
                            <Link className = "Menu Button Link" to = "/menu">
                                <button className = "Menu Button">Menu</button>
                            </Link><br/><hr/>
                            {customerContent}
                            <p className = "Paragraph Text">Finished?</p>
                            <Link className = "Checkout Button Link" to = "/checkout">
                                <button className = "Checkout Button">Checkout</button>
                            </Link>
                        </div>
                    );
                }
            }
        };

        userContent = userAlg(user);

        return(
            <div className = "Container">{userContent}</div>
        );
    }
}

UserHomePage.propTypes = {
    getUserById: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    getMenuDishes: PropTypes.func.isRequired,
    dishes: PropTypes.object.isRequired,
    getMenuOrders: PropTypes.func.isRequired,
    orders: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    user: state.users,
    dishes: state.dishes,
    orders: state.orders
})

export default connect(mapStateToProps, {getUserById, getMenuDishes, getMenuOrders})(UserHomePage);