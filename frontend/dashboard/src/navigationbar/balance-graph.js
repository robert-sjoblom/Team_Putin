/* global $ */
import React from 'react';
import ReactDOM from 'react-dom';


class BalanceGraph extends React.Component {

    componentDidMount() {
        $(ReactDOM.findDOMNode(this)).sparkline([8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12], {
            type: 'bar',
            height: '35',
            barWidth: '5',
            barSpacing: '3',
            barColor: '#7A6FBE'
        })
    }
    
    render() {
        return <div id="header-chart-1"></div>
    }
}

export default BalanceGraph;

