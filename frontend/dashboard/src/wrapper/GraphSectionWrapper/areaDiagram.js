// @ts-nocheck
/* global $ */
/* global Morris */
import React from 'react';
import ReactDOM from 'react-dom';

class AreaDiagram extends React.Component {

    componentDidMount() {
        
        const { data, x, y, labels, colors } = this.props.data;

        //creates area chart
        Morris.Area({
            element: $(ReactDOM.findDOMNode(this)),
            pointSize: 0,
            lineWidth: 1,
            data: data,
            xkey: x,
            ykeys: y,
            labels: labels,
            resize: true,
            gridLineColor: '#eee',
            hideHover: 'auto',
            lineColors: colors,
            fillOpacity: .9,
            behaveLikeLine: true
        });
    }
    
    render() {
        return <div className="dashboard-charts morris-charts"></div>
    }
}

export default AreaDiagram;
