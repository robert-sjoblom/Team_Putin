import React from 'react';
import Raphael from 'raphael';
import 'morris.js/morris.css';
import 'morris.js/morris';




class BalanceInfo extends React.Component {
    
    balance;

    componentDidMount(){
        
    }

    constructor() {
        super();
        window.Raphael = Raphael;
    }
    
    render(){
        return (
        <div className="state-graph">
            <div id="header-chart-1"></div>
            <div className="info">Balance $ 2,317</div>
        </div>
        )
    }
}

export default BalanceInfo;