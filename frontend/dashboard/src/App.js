// @ts-nocheck
import Raphael from 'raphael';
import React, { Component } from 'react';
import './App.css';
import Footer from './Footer/footer';
import Navbar from './navigationbar/navwrapper';
import Wrapper from './wrapper/Wrapper';
import OrderForm from './navigationbar/dashboard/orderform';
import TransactionForm from './navigationbar/dashboard/transactionform';


class App extends Component {
  constructor() {
    super();
    window.Raphael = Raphael;
  }
  render() {
    return (
      <React.Fragment>
        <OrderForm></OrderForm>
        <TransactionForm></TransactionForm>
        <Navbar />
        <Wrapper />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
