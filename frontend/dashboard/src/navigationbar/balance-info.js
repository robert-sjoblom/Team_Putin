import React from 'react';
import BalanceGraph from './balance-graph';
import Requests from '../Request';



class BalanceInfo extends React.Component {
    
    state = {
        balance: 0
    }

    componentDidMount(){
        Requests.get('transactions/getrevenue')
            .then(res => {
                console.log(res);
                this.setState({balance: res})
            })
    }

    
    render(){
        const balance = this.state.balance
        return (
        <div className="state-graph">
            <BalanceGraph></BalanceGraph>
            <div className="info">Balance $ {balance}</div>
        </div>
        )
    }
}

export default BalanceInfo;