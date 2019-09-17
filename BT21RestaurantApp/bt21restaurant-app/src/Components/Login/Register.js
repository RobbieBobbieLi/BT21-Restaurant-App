import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addUser} from '../../Actions/UserActions';
import classnames from 'classnames';

class Register extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: "",
            userType: "",
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

        const newUser = {
            username: this.state.username,
            password: this.state.password,
            userType: this.state.userType
        };

        this.props.addUser(newUser, this.props.history);
    }

    render() {
        const {errors} = this.state;

        return(
            <div className = "Register">
                <Link className = "Back Button Link" to = "/">
                    <button className = "Back Button">Back</button>
                </Link>
                <h1 className = "Header Text">Register</h1>
                <form className = "Form" onSubmit = {this.onSubmit}>
                    <div className = "Form Group">
                        <input className = {classnames("Username Input", {"is-invalid": errors.username})} 
                            type = "Text" name = "username" placeholder = "Username" value = {this.state.username}
                            onChange = {this.onChange}/>
                        {
                            errors.username && (<div className = "Invalid Feedback">{errors.username}</div>)
                        }
                    </div>
                    <div className = "Form Group">
                        <input className = {classnames("Password Input", {"is-invalid": errors.password})}
                            type = "Password" name = "password" placeholder = "Password" value = {this.state.password}
                            onChange = {this.onChange}/>
                        {
                            errors.password && (<div className = "Invalid Feedback">{errors.password}</div>)
                        }
                    </div>
                    <div className = "Form Group">
                        <input className = "User Type Input" type = "Text" name = "userType" placeholder = "User Type"
                            value = {this.state.userType} onChange = {this.onChange}/>
                    </div>
                    <button className = "Submit Register" type = "Submit">Register</button>
                </form><br/><hr/>
                <p className = "Paragraph Text">Already have an account?</p>
                <Link className = "Login Button Link" to = "/login">
                    <button className = "Login Button">Login</button>
                </Link>
            </div>
        );
    }
}

Register.propTypes = {
    addUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps, {addUser})(Register);