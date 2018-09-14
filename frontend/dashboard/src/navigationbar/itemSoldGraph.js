/* global $ */
import React from 'react';
import ReactDOM from 'react-dom';


class ItemSoldGraph extends React.Component {

    itemSold;

    componentDidMount() {
        fetch('') // här ska vi hämta antalet sålda produkter i orders
            .then((data) => this.itemSold = data)
            .catch((err) => console.log(err));

        $(ReactDOM.findDOMNode(this)).sparkline([8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
            type: 'bar',
            height: '35',
            barWidth: '5',
            barSpacing: '3',
            barColor: '#29bbe3'
        })
    }
    
    render() {
        return <div id="header-chart-2"></div>
    }
}

export default ItemSoldGraph;

