import React from 'react';
import BalanceGraph from './balance-graph';



class BalanceInfo extends React.Component {
    
    balance;

    componentDidMount(){
        
    }

    
    render(){
        return (
        <div className="state-graph">
            <BalanceGraph></BalanceGraph>
            <div className="info">Balance $ 2,317</div>
        </div>
        )
    }
}

export default BalanceInfo;