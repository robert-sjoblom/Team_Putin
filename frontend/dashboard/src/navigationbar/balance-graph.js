/* global $ */
import React from 'react';
import ReactDOM from 'react-dom';
import Requests from '../Request';


class BalanceGraph extends React.Component {
    

    componentDidMount() {
        Requests.get('array')
            .then(res => {
                $(ReactDOM.findDOMNode(this)).sparkline(res.numbers, {
                    type: 'bar',
                    height: '35',
                    barWidth: '5',
                    barSpacing: '3',
                    barColor: '#7A6FBE'
                })
            })
    }
    
    render() {
        return <div id="header-chart-1"></div>
    }
}

export default BalanceGraph;

