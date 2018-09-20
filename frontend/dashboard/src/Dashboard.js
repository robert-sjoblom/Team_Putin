import React from 'react';
import Footer from './Footer/footer';
import OrderForm from './navigationbar/dashboard/orderform';
import TransactionForm from './navigationbar/dashboard/transactionform';
import Navbar from './navigationbar/navwrapper';
import Wrapper from './wrapper/Wrapper';

const Dashboard = () => {
  return (
    <React.Fragment>
      <OrderForm/>
      <TransactionForm></TransactionForm>
      <Navbar/>
      <Wrapper/>
      <Footer/>
    </React.Fragment>
  )
}

export default Dashboard;
