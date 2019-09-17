import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {orderDish} from '../../Actions/OrderActions';
import ChimmyImg from '../../SvgFiles/chimmy.svg';
import CookyImg from '../../SvgFiles/cooky.svg';
import KoyaImg from '../../SvgFiles/koya.svg';
import MangImg from '../../SvgFiles/mang.svg';
import RJImg from '../../SvgFiles/rj.svg';
import ShookyImg from '../../SvgFiles/shooky.svg';
import TaTaImg from '../../SvgFiles/tata.svg';
import VanImg from '../../SvgFiles/van.svg';

class MenuItem extends Component {
    constructor() {
        super();

        this.state = {
            dishId: 0,
            customerId: 0,
            status: ""
        };

        this.onOrder = this.onOrder.bind(this);
    }

    onOrder(e) {
        e.preventDefault();

        const {user} = this.props;
        const {dish} = this.props;

        const newOrder = {
            dishId: dish.id,
            customerId: user.id,
            status: "Ordered"
        };

        this.props.orderDish(newOrder, dish.dishName, this.props.history);
    }
    
    render() {
        const {dish} = this.props;

        let bt21Content;

        const bt21Alg = dish => {
            switch(dish.bt21) {
                case "Chimmy":
                    return(
                        <div className = "Image">
                            <img src = {ChimmyImg} alt = ""/>
                        </div>
                    );
                case "Cooky":
                    return(
                        <div className = "Image">
                            <img src = {CookyImg} alt = ""/>
                        </div>
                    );
                case "Koya":
                    return(
                        <div className = "Image">
                            <img src = {KoyaImg} alt = ""/>
                        </div>
                    );
                case "Mang":
                    return(
                        <div className = "Image">
                            <img src = {MangImg} alt = ""/>
                        </div>
                    );
                case "RJ":
                    return(
                        <div className = "Image">
                            <img src = {RJImg} alt = ""/>
                        </div>
                    );
                case "Shooky":
                    return(
                        <div className = "Image">
                            <img src = {ShookyImg} alt = ""/>
                        </div>
                    );
                case "TaTa":
                    return(
                        <div className = "Image">
                            <img src = {TaTaImg} alt = ""/>
                        </div>
                    );
                case "Van":
                    return(
                        <div className = "Image">
                            <img src = {VanImg} alt = ""/>
                        </div>
                    );
                default:
                    return (
                        <div className = "Image">
                            <img src = {VanImg} alt = ""/>
                        </div>
                    );
            }
        };

        bt21Content = bt21Alg(dish);

        return(
            <div className = "Dish Container">
                <h4 className = "Header Text">Dish Name: {dish.dishName}</h4>
                <p className = "Paragraph Text">Catagory: {dish.catagory}</p>
                <div className = "BT21 Member">BT21 Member: {bt21Content}</div>
                <p className = "Paragraph Text">Description: {dish.desc}</p>
                <p className = "Paragraph Text">Price: ${dish.price}</p>
                <p className = "Paragraph Text">Calories: {dish.calories}</p>
                <button className = "Order Button" onClick = {this.onOrder}>Order</button><br/><hr/>
            </div>
        );
    }
}

MenuItem.propTypes = {
    orderDish: PropTypes.func.isRequired
}

export default connect(null, {orderDish})(MenuItem);