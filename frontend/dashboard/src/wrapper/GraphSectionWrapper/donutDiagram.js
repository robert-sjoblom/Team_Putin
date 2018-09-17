// @ts-nocheck
/* global $ */
/* global Morris */
import React from 'react';
import ReactDOM from 'react-dom';

class DonutDiagram extends React.Component {
    
    componentDidMount() {

        const { data, colors } = this.props.data;

        //creates Donut chart
        Morris.Donut({
            element: $(ReactDOM.findDOMNode(this)),
            data: data,
            resize: true,
            colors: colors
        });
    }
  
    render() {
        return <div className="dashboard-charts morris-charts"></div>
    }
}

export default DonutDiagram;
