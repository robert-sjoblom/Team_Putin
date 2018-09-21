import React from 'react';
import BalanceInfo from './balance-info';
import ItemSold from './itemsold-info';


class DetailsWrapper extends React.Component {

    render(){
        return (
            <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="page-title-box">
                        <h4 className="page-title">Dashboard</h4>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active">
                                Welcome to Lexa Dashboard
                            </li>
                        </ol>
                        <div className="state-information">
                            <BalanceInfo></BalanceInfo>
                            <ItemSold></ItemSold>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    } 
}

export default DetailsWrapper;