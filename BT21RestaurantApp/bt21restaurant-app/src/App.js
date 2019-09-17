import React, {Component} from 'react';
import HomePage from './Components/HomePage';
import LoginImg from './SvgFiles/login.svg';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Register from './Components/Login/Register';
import {Provider} from 'react-redux';
import Store from './Store';
import Login from './Components/Login/Login';
import UserHomePage from './Components/UserHomePage';
import Menu from './Components/Customer/Menu';
import NewDish from './Components/Chef/NewDish';
import UpdateDish from './Components/Chef/UpdateDish';
import Checkout from './Components/Customer/Checkout';

class App extends Component {
  render() {
    return(
      <Provider store = {Store}>
        <Router>
          <div className = "App">
            <h1 className = "Header">BT21 Restaurant App</h1>
            <div className = "Image">
              <img src = {LoginImg} alt = ""/>
            </div>
            <Route exact path = "/" component = {HomePage}/>
            <Route exact path = "/register" component = {Register}/>
            <Route exact path = "/login" component = {Login}/>
            <Route exact path = "/home" component = {UserHomePage}/>
            <Route exact path = "/newDish" component = {NewDish}/>
            <Route exact path = "/updateDish/:dish_id" component = {UpdateDish}/>
            <Route exact path = "/menu" component = {Menu}/>
            <Route exact path = "/checkout" component = {Checkout}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;