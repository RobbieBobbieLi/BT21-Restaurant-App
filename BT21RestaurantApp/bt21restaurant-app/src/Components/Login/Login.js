import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {authUser} from '../../Actions/UserActions';
import classnames from 'classnames';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: "",
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

        const loginUser = {
            username: this.state.username,
            password: this.state.password
        };

        this.props.authUser(loginUser, this.props.history);
    }

    render() {
        const {errors} = this.state;

        return(
            <div className = "Login">
                <Link className = "Back Button Link" to = "/">
                    <button className = "Back Button">Back</button>
                </Link>
                <h1 className = "Header Text">Login</h1>
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
                    <button className = "Submit Login" type = "Submit">Login</button>
                </form><br/><hr/>
                <p className = "Paragraph Text">Don't have an account?</p>
                <Link className = "Register Button Link" to = "/register">
                    <button className = "Register Button">Register</button>
                </Link>
            </div>
        );
    }
}

Login.propTypes = {
    authUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps, {authUser})(Login);