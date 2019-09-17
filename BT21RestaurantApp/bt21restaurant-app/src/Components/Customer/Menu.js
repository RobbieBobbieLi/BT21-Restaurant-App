import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import MenuItem from './MenuItem';

class Menu extends Component {
    render() {
        const {user} = this.props.user;
        const {dishes} = this.props.dishes;

        let userContent;
        let menuContent;
        let menuContentDishes = [];

        const menuContentAlg = dishes => {
            if (dishes.length < 1) {
                return(
                    <div className = "Container">
                        <h1 className = "Header Text">Menu</h1>
                        <p className = "Paragraph Text">Empty Menu!</p>
                    </div>
                );
            } else {
                const dishs = dishes.map(dish => (
                    <MenuItem key = {dish.id} dish = {dish} user = {user} history = {this.props.history}/>
                ));

                for (let i = 0; i < dishs.length; i++) {
                    menuContentDishes.push(dishs[i]);
                }
            }

            return(
                <div className = "Container">
                    <h1 className = "Header Text">Menu</h1>
                    {menuContentDishes}
                </div>
            );
        };

        menuContent = menuContentAlg(dishes);

        const userAlg = user => {
            if (!user.userType) {
                return(
                    <div className = "Menu">
                        <h2 className = "Header Text">You are not logged in!</h2>
                        <p className = "Paragraph Text">Please sign in to continue!</p>
                        <Link className = "Home Button Link" to = "/">
                            <button className = "Home Button">Home</button>
                        </Link><br/><hr/>
                    </div>
                );
            } else {
                return(
                    <div className = "Menu">
                        <Link className = "Back Button Link" to = "/home">
                            <button className = "Back Button">Back</button>
                        </Link>
                        <div className = "Container">{menuContent}</div>
                    </div>
                );
            }
        };

        userContent = userAlg(user);

        return(
            <div className = "Menu">{userContent}</div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.users,
    dishes: state.dishes,
    orders: state.orders
})

export default connect(mapStateToProps)(Menu);