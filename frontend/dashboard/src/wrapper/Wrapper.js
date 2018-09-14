// @ts-nocheck
import React from 'react';
import ConciseWrapper from '../conciseBoxes/conciseWrapper/conciseWrapper';
import InboxWrapper from '../Inbox/InboxWrapper';
import OrderWrapper from '../LatestOrders/orderWrapper';
import TransactionWrapper from '../LatestTransactions/transactionWrapper';
import QuoteWrapper from '../QuoteBox/QuoteWrapper';
import RecentActivities from '../RecentActivities/RecentActivities';

const Wrapper = () => {
  return (
    <div className="wrapper">
      <div className="container-fluid">
        <div className="row">
          <ConciseWrapper></ConciseWrapper>
        </div>

        <div className="row">
          {/* <!-- MONTHLY EARNINGS BOX TO THE LEFT --> */}
          <div className="col-xl-3">
            <div className="card m-b-20">
              <div className="card-body">
                <h4 className="mt-0 header-title">Monthly Earnings</h4>

                <div className="row text-center m-t-20">
                  <div className="col-6">
                    <h5 className="">$56241</h5>
                    <p className="text-muted ">Marketplace</p>
                  </div>
                  <div className="col-6">
                    <h5 className="">$23651</h5>
                    <p className="text-muted ">Total Income</p>
                  </div>
                </div>

                <div id="morris-donut-example" className="dashboard-charts morris-charts"></div>
              </div>
            </div>
          </div>
          {/* <!-- END MONTHLY EARNINGS BOX TO THE LEFT -->
    
                    <!-- EMAIL SENT BOX MIDDLE --> */}
          <div className="col-xl-6">
            <div className="card m-b-20">
              <div className="card-body">
                <h4 className="mt-0 header-title">Email Sent</h4>

                <div className="row text-center m-t-20">
                  <div className="col-4">
                    <h5 className="">$ 89425</h5>
                    <p className="text-muted ">Marketplace</p>
                  </div>
                  <div className="col-4">
                    <h5 className="">$ 56210</h5>
                    <p className="text-muted ">Total Income</p>
                  </div>
                  <div className="col-4">
                    <h5 className="">$ 8974</h5>
                    <p className="text-muted ">Last Month</p>
                  </div>
                </div>

                <div id="morris-area-example" className="dashboard-charts morris-charts"></div>
              </div>
            </div>
          </div>
          {/* <!-- END EMAIL SENT BOX MIDDLE -->
    
                    <!-- MONTHLY EARNING BOX TO THE RIGHT --> */}
          <div className="col-xl-3">
            <div className="card m-b-20">
              <div className="card-body">
                <h4 className="mt-0 header-title">Monthly Earnings</h4>

                <div className="row text-center m-t-20">
                  <div className="col-6">
                    <h5 className="">$ 2548</h5>
                    <p className="text-muted ">Marketplace</p>
                  </div>
                  <div className="col-6">
                    <h5 className="">$ 6985</h5>
                    <p className="text-muted ">Total Income</p>
                  </div>
                </div>

                <div id="morris-bar-stacked" className="dashboard-charts morris-charts"></div>
              </div>
            </div>
          </div>
          {/* <!-- END MONTHLY EARNING BOX TO THE RIGHT --> */}
        </div>
        {/* <!-- end row --> */}

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
