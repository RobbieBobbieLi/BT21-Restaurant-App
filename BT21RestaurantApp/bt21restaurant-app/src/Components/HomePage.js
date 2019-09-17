import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class HomePage extends Component {
    render() {
        return(
            <div className = "Container"><br/><hr/>
                <h1 className = "Header Text">New?</h1>
                <Link className = "Register Button Link" to = "/register">
                    <button className = "Register Button">Register</button>
                </Link>
                <h1 className = "Header Text">Returning User?</h1>
                <Link className = "Login Button Link" to = "/login">
                    <button className = "Login Button">Login</button>
                </Link>
            </div>
        );
    }
}

export default HomePage;