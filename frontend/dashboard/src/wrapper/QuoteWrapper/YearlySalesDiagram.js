// @ts-nocheck
/* global $ */
import React from 'react';
import ReactDOM from 'react-dom';
import Requests from '../../Request';

class YearlySalesDiagram extends React.Component {

  componentDidMount() {
    Requests.get('array')
      .then(res => {
        $(ReactDOM.findDOMNode(this)).sparkline(res.numbers, { //eslint-disable-line
          type: 'bar',
          height: '134',
          barWidth: '10',
          barSpacing: '7',
          barColor: '#7A6FBE'
        })
      })
  }
  render() {
    return <div id="sparkline"></div>
  }
}

export default YearlySalesDiagram;
