// @ts-nocheck
import Raphael from 'raphael';
import React, { Component } from 'react';
import './App.css';
import Wrapper from './wrapper/Wrapper';
import Navbar from './navigationbar/navwrapper';


class App extends Component {
  constructor() {
    super();
    window.Raphael = Raphael;
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Wrapper />
      </React.Fragment>
    );
  }
}

export default App;
