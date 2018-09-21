import React from 'react';
import ItemSoldGraph from './itemSoldGraph';
import Requests from '../Request';


class ItemSold extends React.Component {
    
    state = {
        orders: []
    }

    componentDidMount(){
        Requests.post('orders/getSpecificOrders', {status: ['delivered']})
            .then(res => {
                this.setState({...res})
            })
    }

    render(){
        return (
            <div className="state-graph">
                <ItemSoldGraph></ItemSoldGraph>
                <div className="info">Item Sold: {this.state.orders.length}</div>
            </div>
        )
    } 
}

export default ItemSold;