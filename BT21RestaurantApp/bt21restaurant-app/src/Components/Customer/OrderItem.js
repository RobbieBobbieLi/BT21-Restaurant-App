import React, {Component} from 'react';
import ChimmyImg from '../../SvgFiles/chimmy.svg';
import CookyImg from '../../SvgFiles/cooky.svg';
import KoyaImg from '../../SvgFiles/koya.svg';
import MangImg from '../../SvgFiles/mang.svg';
import RJImg from '../../SvgFiles/rj.svg';
import ShookyImg from '../../SvgFiles/shooky.svg';
import TaTaImg from '../../SvgFiles/tata.svg';
import VanImg from '../../SvgFiles/van.svg';

class OrderItem extends Component {
    render() {
        const {order} = this.props;
        const {menu} = this.props;

        let orderDish;
        let orderedDish = {};
        let bt21Content;

        const dishAlg = menu => {
            for (let i = 0; i < menu.length; i++) {
                if (menu[i].id === order.dishId) {
                    orderedDish = menu[i];

                    return(orderedDish);
                }
            }
        };

        orderDish = dishAlg(menu);

        const bt21Alg = orderDish => {
            switch(orderDish.bt21) {
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

        bt21Content = bt21Alg(orderDish);

        return(
            <div className = "Order Container">
                <h4 className = "Header Text">Dish Name: {orderDish.dishName}</h4>
                <div className = "BT21 Member">BT21 Member: {bt21Content}</div><br/><hr/>
            </div>
        );
    }
}

export default OrderItem;