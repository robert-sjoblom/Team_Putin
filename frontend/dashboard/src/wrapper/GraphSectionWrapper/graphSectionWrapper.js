import React from 'react';
import MonthlyEarnings from './monthlyEarningsWrapper';
import EmailsSent from './emailsSent';

class GraphSectionWrapper extends React.Component {

    render() {
        return ( 
            <React.Fragment>
                <MonthlyEarnings marketPlace="56241" totalIncome="23651" graph=""></MonthlyEarnings>
                <EmailsSent marketPlace="89425" totalIncome="56210" lastMonth="8974" graph=""></EmailsSent>
                <MonthlyEarnings marketPlace="2548" totalIncome="6985" graph=""></MonthlyEarnings>
            </React.Fragment>
        )
    }
}

export default GraphSectionWrapper;