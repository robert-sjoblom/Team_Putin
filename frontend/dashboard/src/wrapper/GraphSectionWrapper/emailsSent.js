import React from 'react';

class EmailsSent extends React.Component {

    render() {
        return ( 
            <div className="col-xl-6">
                <div className="card m-b-20">
                    <div className="card-body">
                        <h4 className="mt-0 header-title">Email Sent</h4>

                            <div className="row text-center m-t-20">
                            <div className="col-4">
                                <h5 className="">${this.props.marketPlace}</h5>
                                <p className="text-muted ">Marketplace</p>
                            </div>
                            <div className="col-4">
                                <h5 className="">${this.props.totalIncome}</h5>
                                <p className="text-muted ">Total Income</p>
                            </div>
                            <div className="col-4">
                                <h5 className="">${this.props.lastMonth}</h5>
                                <p className="text-muted ">Last Month</p>
                            </div>
                        </div>

                        <div id="morris-area-example" className="dashboard-charts morris-charts"></div>
                    </div>
                </div>
          </div>
        )
    }
}

export default EmailsSent;