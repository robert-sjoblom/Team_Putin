// @ts-nocheck
import Raphael from 'raphael';
import React, { Component } from 'react';
import './App.css';
import Wrapper from './wrapper/Wrapper';


class App extends Component {
  constructor() {
    super();
    window.Raphael = Raphael;
  }
  render() {
    return (
      // <Header />
        <Wrapper />
      // <Footer />
    );
  }
}

export default App;
