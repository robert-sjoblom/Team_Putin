// @ts-nocheck
import Raphael from 'raphael';
import React, { Component } from 'react';
import './App.css';
import Footer from './Footer/footer';
import Navbar from './navigationbar/navwrapper';
import Wrapper from './wrapper/Wrapper';


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
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
