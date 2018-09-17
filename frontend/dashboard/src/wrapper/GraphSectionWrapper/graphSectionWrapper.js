import React from 'react';
import MonthlyEarningsWrapper from './monthlyEarningsWrapper';
import EmailsSent from './emailsSent';

class GraphSectionWrapper extends React.Component {

    donutData = { 
        type: "donut",
        data: [
            {label: "Download Sales", value: 12},
            {label: "In-Store Sales", value: 30},
            {label: "Mail-Order Sales", value: 20}
        ],
        colors: ['#f0f1f4', '#7a6fbe', '#28bbe3'] 
    };
    areaData = { 
        type: "area",
        data: [
            {y: '2011', a: 0, b: 0, c:0},
            {y: '2012', a: 150, b: 45, c:15},
            {y: '2013', a: 60, b: 150, c:195},
            {y: '2014', a: 180, b: 36, c:21},
            {y: '2015', a: 90, b: 60, c:360},
            {y: '2016', a: 75, b: 240, c:120},
            {y: '2017', a: 30, b: 30, c:30}
        ],
        x: 'y',
        y: ['a', 'b', 'c'],
        labels: ['Series A', 'Series B', 'Series C'],
        colors: ['#ccc', '#7a6fbe', '#28bbe3'], 
    };
    barData = { 
        type: "bar",
        data: [
            { y: '2005', a: 45, b: 180},
            { y: '2006', a: 75,  b: 65},
            { y: '2007', a: 100, b: 90},
            { y: '2008', a: 75,  b: 65},
            { y: '2009', a: 100, b: 90},
            { y: '2010', a: 75,  b: 65},
            { y: '2011', a: 50,  b: 40},
            { y: '2012', a: 75,  b: 65},
            { y: '2013', a: 50,  b: 40},
            { y: '2014', a: 75,  b: 65},
            { y: '2015', a: 100, b: 90},
            { y: '2016', a: 80, b: 65}
        ],
        x: 'y',
        y: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        colors: ['#28bbe3','#f0f1f4']
     };

    render() {
        return ( 
            <React.Fragment>
                <MonthlyEarningsWrapper marketPlace="56241" totalIncome="23651" graphData={this.donutData}></MonthlyEarningsWrapper>
                <EmailsSent marketPlace="89425" totalIncome="56210" lastMonth="8974" graphData={this.areaData}></EmailsSent>
                <MonthlyEarningsWrapper marketPlace="2548" totalIncome="6985" graphData={this.barData}></MonthlyEarningsWrapper>
            </React.Fragment>
        )
    }
}

export default GraphSectionWrapper;