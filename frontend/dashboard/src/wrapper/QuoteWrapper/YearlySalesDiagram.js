// @ts-nocheck
/* global $ */
import React from 'react';
import ReactDOM from 'react-dom';
// sales yearlySales={[8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12]} 

class YearlySalesDiagram extends React.Component {
  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).sparkline(this.props.figures, {
      type: 'bar',
      height: '134',
      barWidth: '10',
      barSpacing: '7',
      barColor: '#7A6FBE'
    })
  }
  
  render() {
    return <div id="sparkline"></div>
  }
}

export default YearlySalesDiagram;
