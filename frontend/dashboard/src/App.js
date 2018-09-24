// @ts-nocheck
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import Login from './Login';



class App extends Component {
  // constructor() {
  //   super();
  //   window.Raphael = Raphael;
  // }
  state = {
    token: false
  }
  
  componentDidMount() {
    // when we start up, we look for a localStorage key
    // if key exists, we load it into token
    // otherwise we don't
    // TO BE IMPLEMENTED
  }

  setToken = token => {
    this.setState({ token }, () => {
      sessionStorage.setItem('token', this.state.token);
    });
  }
  render() {
    return (
      <Switch>
        <Route exact path='/' render={props => {
          return this.state.token ? <Dashboard {...props} /> : <Login {...props} setToken={this.setToken} /> 
        }}/>
      </Switch>
    )
  }
}

export default App;
