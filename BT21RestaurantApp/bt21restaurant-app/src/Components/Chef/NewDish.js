import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {newDish} from '../../Actions/DishActions';
import classnames from 'classnames';

class NewDish extends Component {
    constructor() {
        super();

        this.state = {
            dishName: "",
            calories: 0,
            catagory: "",
            bt21: "",
            price: 0.00,
            desc: "",
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }
    
    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const newDish = {
            dishName: this.state.dishName,
            calories: this.state.calories,
            catagory: this.state.catagory,
            bt21: this.state.bt21,
            price: this.state.price,
            desc: this.state.desc
        };

        this.props.newDish(newDish, this.props.history);
    }

    render() {
        const {errors} = this.state;

        return(
            <div className = "Add Dish">
                <Link className = "Back Button Link" to = "/home">
                    <button className = "Back Button">Back</button>
                </Link>
                <h1 className = "Header Text">Add Dish</h1>
                <form className = "Form" onSubmit = {this.onSubmit}>
                    <div className = "Form Group">
                        Dish Name:
                        <input className = {classnames("Dish Name Input", {"is-invalid": errors.dishName})} 
                            type = "Text" name = "dishName" placeholder = "Dish Name" value = {this.state.dishName}
                            onChange = {this.onChange}/>
                        {
                            errors.dishName && (<div className = "Invalid Feedback">{errors.dishName}</div>)
                        }
                    </div>
                    <div className = "Form Group">
                        Calories:
                        <input className = {classnames("Calories Input", {"is-invalid": errors.calories})}
                            type = "Number" name = "calories" placeholder = {this.state.calories} 
                            value = {this.state.calories} onChange = {this.onChange}/>
                        {
                            errors.calories && (<div className = "Invalid Feedback">{errors.calories}</div>)
                        }
                    </div>
                    <div className = "Form Group">
                        Catagory:
                        <select className = {classnames("Catagory Input", {"is-invalid": errors.catagory})} 
                            name = "catagory" value = {this.state.catagory} onChange = {this.onChange}>
                            <option value = "">Select Catagory</option>
                            <option value = "Appetizers">Appetizers</option>
                            <option value = "Salad">Salad</option>
                            <option value = "Soup">Soup</option>
                            <option value = "Beef Entrée">Beef Entrée</option>
                            <option value = "Chicken Entrée">Chicken Entrée</option>
                            <option value = "Pork Entrée">Pork Entrée</option>
                            <option value = "Seafood Entrée">Seafood Entrée</option>
                            <option value = "Vegetarian Entrée">Vegetarian Entrée</option>
                            <option value = "Drinks">Drinks</option>
                            <option value = "Desert">Desert</option>
                        </select>
                        {
                            errors.catagory && (<div className = "Invalid Feedback">{errors.catagory}</div>)
                        }
                    </div>
                    <div className = "Form Group">
                        BT21 Member:
                        <select className = {classnames("BT21 Input", {"is-invalid": errors.bt21})} 
                            name = "bt21" value = {this.state.bt21} onChange = {this.onChange}>
                            <option value = "">Select BT21 Member</option>
                            <option value = "Chimmy">Chimmy</option>
                            <option value = "Cooky">Cooky</option>
                            <option value = "Koya">Koya</option>
                            <option value = "Mang">Mang</option>
                            <option value = "RJ">RJ</option>
                            <option value = "Shooky">Shooky</option>
                            <option value = "TaTa">TaTa</option>
                            <option value = "Van">Van</option>
                        </select>
                    </div>
                    <div className = "Form Group">
                        Price: $
                        <input className = {classnames("Price Input", {"is-invalid": errors.price})}
                            type = "Number" name = "price" placeholder = {this.state.price}
                            value = {this.state.price} onChange = {this.onChange}/>
                        {
                            errors.price && (<div className = "Invalid Feedback">{errors.price}</div>)
                        }
                    </div>
                    <div className = "Form Group">
                        Description:
                        <textarea className = {classnames("Description Input", {"is-invalid": errors.desc})} 
                            type = "Text" name = "desc" cols = "28" rows = "3" placeholder = "Description" 
                            value = {this.state.desc} onChange = {this.onChange}/>
                        {
                            errors.desc && (<div className = "Invalid Feedback">{errors.desc}</div>)
                        }
                    </div><br/>
                    <button className = "Submit Dish" type = "Submit">Add Dish</button>
                </form><br/><hr/>
            </div>
        );
    }
}

NewDish.propTypes = {
    newDish: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps, {newDish})(NewDish);