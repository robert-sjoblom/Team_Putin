import React from 'react';
import Requests from '../../Request';
import MonthlyEarningsWrapper from './monthlyEarningsWrapper';
import EmailsSent from './emailsSent';

class GraphSectionWrapper extends React.Component {

    state = {
        // Left box
        monthlyEarnings: {
            marketPlace: 0,
            totalIncome: 0,
            graph: {
                isLoaded: false
            }
        },

        // Middle box
        emailsSent: {
            marketPlace: 0,
            totalIncome: 0,
            lastMonth: 0,
            graph: { 
                isLoaded: false
            }
        },

        // Right box
        yearlyEarnings: {
            marketPlace: 0,
            totalIncome: 0,
            graph: { 
                isLoaded: false
            }
        }
    };
    
    componentDidMount(){
       this.getMonthlyEarnings();
       
       this.getYearlyEarnings();
    }

    getMonthlyEarnings(){
        // Calculate start date of current month
        let monthStartDate = new Date();
        monthStartDate.setDate(1);
        monthStartDate.setHours(0, 0, 0, 0);

        // Request orders from server
        Requests.post('orders/getSpecificOrders', {
            status: ['shipped', 'delivered'],
            fromOrderDate: monthStartDate
        })
        .then(({ orders }) => {

            // Monthly earnings
            const monthlyEarnings = orders.reduce(( prev, { orderValue, orderType } ) => {
                // Keep track of income
                prev.totalIncome += orderValue;
                if(orderType === 'in-store') prev.marketPlace += orderValue;

                // Determine and count type
                if(orderType === 'download') prev.graph.data[0].value++;
                if(orderType === 'in-store') prev.graph.data[1].value++;
                if(orderType === 'mail-order') prev.graph.data[2].value++;

                return prev;
            }, {
                marketPlace: 0,
                totalIncome: 0,
                graph: {
                    isLoaded: true,
                    type: "donut",
                    data: [
                        {label: "Download Sales", value: 0},
                        {label: "In-Store Sales", value: 0},
                        {label: "Mail-Order Sales", value: 0}
                    ],
                    colors: ['#f0f1f4', '#7a6fbe', '#28bbe3'] 
                }
            });

            // Save in state
            this.setState({ monthlyEarnings });
        })
        .catch(err => console.log(err));
    }
    
    getYearlyEarnings(){
        // Request orders from server
        Requests.get('orders/getYearlyIncomes')
        .then(({ incomes }) => {

            // Yearly earnings
            const yearlyEarnings = Object.keys(incomes.totalIncome).reduce(( prev, year, index, arr ) => {
                prev.graph.data.push({
                    y: year,
                    a: incomes.totalIncome[year],
                    b: incomes.inStore[year]
                });
                // If last year
                if(index === arr.length - 1){
                    prev.marketPlace = incomes.inStore[year];
                    prev.totalIncome = incomes.totalIncome[year];
                }
                return prev;
            }, {
                marketPlace: 0,
                totalIncome: 0,
                graph: {
                    isLoaded: true,
                    type: "bar",
                    data: [],
                    x: 'y',
                    y: ['a', 'b'],
                    labels: ['Total income', 'Market place'],
                    colors: ['#28bbe3','#f0f1f4']
                }
            });

            // Emails sent
            const emailsSent = Object.keys(incomes.totalIncome).reduce(( prev, year ) => {
                prev.marketPlace += incomes.inStore[year];
                prev.totalIncome += incomes.totalIncome[year];
                prev.graph.data.push({
                    y: year,
                    a: incomes.inStore[year],
                    b: incomes.download[year],
                    c: incomes.mailOrder[year]
                });
                return prev;
            }, {
                marketPlace: 0,
                totalIncome: 0,
                lastMonth: 0,
                graph: {
                    isLoaded: true,
                    type: "area",
                    data: [],
                    x: 'y',
                    y: ['a', 'b', 'c'],
                    labels: ['In store', 'Download', 'Mail-order'],
                    colors: ['#ccc', '#7a6fbe', '#28bbe3']
                }
            });

            // Save in state
            this.setState({
                yearlyEarnings,
                emailsSent
            });
        })
        .catch(err => console.log(err));
    }

    render() {
        return ( 
            <React.Fragment>
                <MonthlyEarningsWrapper 
                    marketPlace={this.state.monthlyEarnings.marketPlace} 
                    totalIncome={this.state.monthlyEarnings.totalIncome}
                    graphData={this.state.monthlyEarnings.graph}></MonthlyEarningsWrapper>
                <EmailsSent 
                    marketPlace={this.state.emailsSent.marketPlace} 
                    totalIncome={this.state.emailsSent.totalIncome}
                    lastMonth={this.state.emailsSent.lastMonth}
                    graphData={this.state.emailsSent.graph}></EmailsSent>
                <MonthlyEarningsWrapper 
                    marketPlace={this.state.yearlyEarnings.marketPlace} 
                    totalIncome={this.state.yearlyEarnings.totalIncome}
                    graphData={this.state.yearlyEarnings.graph}></MonthlyEarningsWrapper>
            </React.Fragment>
        )
    }
}

export default GraphSectionWrapper;