/* global $ */
import React from 'react';
import ReactDOM from 'react-dom';
import Requests from '../Request';


class ItemSoldGraph extends React.Component {

    itemSold;

    componentDidMount() {
        Requests.get('array')
            .then(res => {
                $(ReactDOM.findDOMNode(this)).sparkline(res.numbers, {
                    type: 'bar',
                    height: '35',
                    barWidth: '5',
                    barSpacing: '3',
                    barColor: '#29bbe3'
                })
            })
    }
    
    render() {
        return <div id="header-chart-2"></div>
    }
}

export default ItemSoldGraph;

