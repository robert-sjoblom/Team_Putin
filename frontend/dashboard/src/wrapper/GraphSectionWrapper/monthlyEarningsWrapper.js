import React from 'react';
import DonutDiagram from './donutDiagram';
import BarDiagram from './barDiagram';

class MonthlyEarnings extends React.Component {

    ComponentDidMount(){
        
    }

    render() {
        return ( 
            <div className="col-xl-3">
                <div className="card m-b-20">
                    <div className="card-body">
                        <h4 className="mt-0 header-title">Monthly Earnings</h4>

                        <div className="row text-center m-t-20">
                            <div className="col-6">
                                <h5 className="">${this.props.marketPlace}</h5>
                                <p className="text-muted ">Marketplace</p>
                            </div>
                            <div className="col-6">
                                <h5 className="">${this.props.totalIncome}</h5>
                                <p className="text-muted ">Total Income</p>
                            </div>
                        </div>

                        { this.props.graphData.type === "donut" && <DonutDiagram data={this.props.graphData}></DonutDiagram> }
                        { this.props.graphData.type === "bar" && <BarDiagram data={this.props.graphData}></BarDiagram> }
                    </div>
                </div>
            </div>
        )
    }
}

export default MonthlyEarnings;