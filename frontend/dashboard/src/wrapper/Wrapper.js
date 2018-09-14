// @ts-nocheck
import React from 'react';
import InboxWrapper from '../Inbox/InboxWrapper';
import QuoteWrapper from '../QuoteBox/QuoteWrapper';
import RecentActivities from '../RecentActivities/RecentActivities';

const Wrapper = () => {
    return (
        <div className="wrapper">
            <div className="container-fluid">
                <div className="row">

                    {/* <!-- START OF CONCISE STAT BOXES COMPONENT --> */}
                    <div className="col-xl-3 col-md-6">
                        <div className="card mini-stat bg-primary">
                            <div className="card-body mini-stat-img">
                                <div className="mini-stat-icon">
                                    <i className="mdi mdi-cube-outline float-right"></i>
                                </div>
                                <div className="text-white">
                                    <h6 className="text-uppercase mb-3">Orders</h6>
                                    <h4 className="mb-4">1,587</h4>
                                    <span className="badge badge-info"> +11% </span> <span className="ml-2">From previous period</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- END OF CONCISE STAT BOXES COMPONENT -->
    
                    <!-- ANOTHER CONCISE STAT BOX COMPONENT --> */}
                    <div className="col-xl-3 col-md-6">
                        <div className="card mini-stat bg-primary">
                            <div className="card-body mini-stat-img">
                                <div className="mini-stat-icon">
                                    <i className="mdi mdi-buffer float-right"></i>
                                </div>
                                <div className="text-white">
                                    <h6 className="text-uppercase mb-3">Revenue</h6>
                                    <h4 className="mb-4">$46,782</h4>
                                    <span className="badge badge-danger"> -29% </span> <span className="ml-2">From previous period</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- END OF ANOTHER CONCISE STAT BOX COMPONENT -->
    
                    <!-- ETC --> */}
                    <div className="col-xl-3 col-md-6">
                        <div className="card mini-stat bg-primary">
                            <div className="card-body mini-stat-img">
                                <div className="mini-stat-icon">
                                    <i className="mdi mdi-tag-text-outline float-right"></i>
                                </div>
                                <div className="text-white">
                                    <h6 className="text-uppercase mb-3">Average Price</h6>
                                    <h4 className="mb-4">$15.9</h4>
                                    <span className="badge badge-warning"> 0% </span> <span className="ml-2">From previous period</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card mini-stat bg-primary">
                            <div className="card-body mini-stat-img">
                                <div className="mini-stat-icon">
                                    <i className="mdi mdi-briefcase-check float-right"></i>
                                </div>
                                <div className="text-white">
                                    <h6 className="text-uppercase mb-3">Product Sold</h6>
                                    <h4 className="mb-4">1890</h4>
                                    <span className="badge badge-info"> +89% </span> <span className="ml-2">From previous period</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end row --> */}

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
                    {/* <!-- INBOX COMPONENT --> */}
                    <InboxWrapper></InboxWrapper>

                    {/* <!-- RECENT ACTIVITIES FEED COMPONENT --> */}
                    <RecentActivities></RecentActivities>

                    {/* <!-- QUOTE COMPONENT  -->
                    <!-- NOTE the graph below is part of this --> */}
                    <QuoteWrapper />

                    
                </div>
                {/* <!-- end row --> */}

                <div className="row">
                    {/* <!-- TRANSACTIONS COMPONENT --> */}
                    <div className="col-xl-6">
                        <div className="card m-b-20">
                            <div className="card-body">
                                <h4 className="mt-0 m-b-30 header-title">Latest Transactions</h4>

                                <div className="table-responsive">
                                    <table className="table table-vertical">

                                        <tbody>
                                            <tr>
                                                <td>
                                                    <img src="assets/images/users/user-2.jpg" alt="user-image" className="thumb-sm rounded-circle mr-2" />
                                                    Herbert C. Patton
                          </td>
                                                <td><i className="mdi mdi-checkbox-blank-circle text-success"></i> Confirm</td>
                                                <td>
                                                    $14,584
                            <p className="m-0 text-muted font-14">Amount</p>
                                                </td>
                                                <td>
                                                    5/12/2016
                            <p className="m-0 text-muted font-14">Date</p>
                                                </td>
                                                <td>
                                                    <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <img src="assets/images/users/user-3.jpg" alt="user-image" className="thumb-sm rounded-circle mr-2" />
                                                    Mathias N. Klausen
                          </td>
                                                <td><i className="mdi mdi-checkbox-blank-circle text-warning"></i> Waiting payment</td>
                                                <td>
                                                    $8,541
                            <p className="m-0 text-muted font-14">Amount</p>
                                                </td>
                                                <td>
                                                    10/11/2016
                            <p className="m-0 text-muted font-14">Date</p>
                                                </td>
                                                <td>
                                                    <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <img src="assets/images/users/user-4.jpg" alt="user-image" className="thumb-sm rounded-circle mr-2" />
                                                    Nikolaj S. Henriksen
                          </td>
                                                <td><i className="mdi mdi-checkbox-blank-circle text-success"></i> Confirm</td>
                                                <td>
                                                    $954
                            <p className="m-0 text-muted font-14">Amount</p>
                                                </td>
                                                <td>
                                                    8/11/2016
                            <p className="m-0 text-muted font-14">Date</p>
                                                </td>
                                                <td>
                                                    <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <img src="assets/images/users/user-5.jpg" alt="user-image" className="thumb-sm rounded-circle mr-2" />
                                                    Lasse C. Overgaard
                          </td>
                                                <td><i className="mdi mdi-checkbox-blank-circle text-danger"></i> Payment expired</td>
                                                <td>
                                                    $44,584
                            <p className="m-0 text-muted font-14">Amount</p>
                                                </td>
                                                <td>
                                                    7/11/2016
                            <p className="m-0 text-muted font-14">Date</p>
                                                </td>
                                                <td>
                                                    <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <img src="assets/images/users/user-6.jpg" alt="user-image" className="thumb-sm rounded-circle mr-2" />
                                                    Kasper S. Jessen
                          </td>
                                                <td><i className="mdi mdi-checkbox-blank-circle text-success"></i> Confirm</td>
                                                <td>
                                                    $8,844
                            <p className="m-0 text-muted font-14">Amount</p>
                                                </td>
                                                <td>
                                                    1/11/2016
                            <p className="m-0 text-muted font-14">Date</p>
                                                </td>
                                                <td>
                                                    <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- END TRANSACTIONS COMPONENT -->
   
                    <!-- LATEST ORDERS COMPONENT --> */}
                    <div className="col-xl-6">
                        <div className="card m-b-20">
                            <div className="card-body">
                                <h4 className="mt-0 m-b-30 header-title">Latest Orders</h4>

                                <div className="table-responsive">
                                    <table className="table table-vertical mb-1">

                                        <tbody>
                                            <tr>
                                                <td>#12354781</td>
                                                <td>
                                                    <img src="assets/images/users/user-1.jpg" alt="user-image" className="thumb-sm mr-2 rounded-circle" />
                                                    Riverston Glass Chair
                          </td>
                                                <td><span className="badge badge-pill badge-success">Delivered</span></td>
                                                <td>
                                                    $185
                          </td>
                                                <td>
                                                    5/12/2016
                          </td>
                                                <td>
                                                    <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>#52140300</td>
                                                <td>
                                                    <img src="assets/images/users/user-2.jpg" alt="user-image" className="thumb-sm mr-2 rounded-circle" />
                                                    Shine Company Catalina
                          </td>
                                                <td><span className="badge badge-pill badge-success">Delivered</span></td>
                                                <td>
                                                    $1,024
                          </td>
                                                <td>
                                                    5/12/2016
                          </td>
                                                <td>
                                                    <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>#96254137</td>
                                                <td>
                                                    <img src="assets/images/users/user-3.jpg" alt="user-image" className="thumb-sm mr-2 rounded-circle" />
                                                    Trex Outdoor Furniture Cape
                          </td>
                                                <td><span className="badge badge-pill badge-danger">Cancel</span></td>
                                                <td>
                                                    $657
                          </td>
                                                <td>
                                                    5/12/2016
                          </td>
                                                <td>
                                                    <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>#12365474</td>
                                                <td>
                                                    <img src="assets/images/users/user-4.jpg" alt="user-image" className="thumb-sm mr-2 rounded-circle" />
                                                    Oasis Bathroom Teak Corner
                          </td>
                                                <td><span className="badge badge-pill badge-warning">Shipped</span></td>
                                                <td>
                                                    $8451
                          </td>
                                                <td>
                                                    5/12/2016
                          </td>
                                                <td>
                                                    <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>#85214796</td>
                                                <td>
                                                    <img src="assets/images/users/user-5.jpg" alt="user-image" className="thumb-sm mr-2 rounded-circle" />
                                                    BeoPlay Speaker
                          </td>
                                                <td><span className="badge badge-pill badge-success">Delivered</span></td>
                                                <td>
                                                    $584
                          </td>
                                                <td>
                                                    5/12/2016
                          </td>
                                                <td>
                                                    <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>#12354781</td>
                                                <td>
                                                    <img src="assets/images/users/user-6.jpg" alt="user-image" className="thumb-sm mr-2 rounded-circle" />
                                                    Riverston Glass Chair
                          </td>
                                                <td><span className="badge badge-pill badge-success">Delivered</span></td>
                                                <td>
                                                    $185
                          </td>
                                                <td>
                                                    5/12/2016
                          </td>
                                                <td>
                                                    <button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- END LATEST ORDERS COMPONENT --> */}
                </div>
                {/* <!-- end row --> */}

            </div> {/* <!-- end container-fluid --> */}
            {/* <!-- end wrapper --> */}
        </div>
    );
}

export default Wrapper;
