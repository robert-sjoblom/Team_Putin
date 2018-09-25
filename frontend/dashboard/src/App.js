// @ts-nocheck
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import Login from './Login';



class App extends Component {
  state = {
    token: false
  }
  
  setToken = token => {
    this.setState({ token }, () => {
      sessionStorage.setItem('token', this.state.token);
    });
  }

  removeToken = () => {
    this.setState({ token: false }, () => {
      sessionStorage.removeItem('token');
    })
  }
  render() {
    return (
      <Switch>
        <Route exact path='/' render={props => {
          return this.state.token ? <Dashboard {...props} logout={this.removeToken} /> : <Login {...props} setToken={this.setToken} /> 
        }}/>
      </Switch>
    )
  }
}

export default App;
