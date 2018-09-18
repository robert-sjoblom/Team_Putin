// @ts-nocheck
/* global $ */
/* global Morris */
import React from 'react';
import ReactDOM from 'react-dom';

class BarDiagram extends React.Component {

    componentDidMount() {

        const { data, x, y, labels, colors } = this.props.data;
        
        Morris.Bar({
            element: $(ReactDOM.findDOMNode(this)),
            data: data,
            xkey: x,
            ykeys: y,
            stacked: true,
            labels: labels,
            hideHover: 'auto',
            resize: true,
            gridLineColor: '#eee',
            barColors: colors
        });
    }
  
    render() {
        return <div className="dashboard-charts morris-charts"></div>
    }
}

export default BarDiagram;
