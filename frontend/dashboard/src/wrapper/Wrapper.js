// @ts-nocheck
import React from 'react';
import ConciseWrapper from './conciseBoxes/conciseWrapper/conciseWrapper';
import GraphSectionWrapper from './GraphSectionWrapper/graphSectionWrapper';
import InboxWrapper from './Inbox/InboxWrapper';
import OrderWrapper from './LatestOrders/orderWrapper';
import TransactionWrapper from './LatestTransactions/transactionWrapper';
import QuoteWrapper from './QuoteWrapper/QuoteWrapper';
import RecentActivities from './RecentActivities/RecentActivities';

const Wrapper = () => {
  return (
    <div className="wrapper">
      <div className="container-fluid">
        <div className="row">
          <ConciseWrapper></ConciseWrapper>
        </div>

        <div className="row">
          <GraphSectionWrapper></GraphSectionWrapper>
        </div>

        <div className="row">
          <InboxWrapper></InboxWrapper>
          <RecentActivities></RecentActivities>
          <QuoteWrapper />
        </div>

        <div className="row">
          <TransactionWrapper></TransactionWrapper>
          <OrderWrapper></OrderWrapper>
        </div>

      </div>
    </div>
  );
}

export default Wrapper;
