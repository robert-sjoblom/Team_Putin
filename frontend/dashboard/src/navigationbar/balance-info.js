import React from 'react';
import BalanceGraph from './balance-graph';
import Requests from '../Request';



class BalanceInfo extends React.Component {
    
    state = {

    }

    componentDidMount(){
        Requests.get('transactions/getrevenue')
            .then(res => console.log(res, "from balance info"))
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