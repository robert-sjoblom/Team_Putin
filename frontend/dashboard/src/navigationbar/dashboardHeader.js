import React from 'react';



class DashboardHeader extends React.Component {

    render(){
        return (
        <div className="navbar-custom">
            <div className="container-fluid">
                <div id="navigation">
                    <ul className="navigation-menu">

                        <li className="has-submenu">
                            <a href="index.html">
                                <i className="ti-dashboard"></i>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li className="has-submenu">
                        <button type="button" className="btn btn-primary mr-3" data-toggle="modal" data-target="#exampleModal">
                            New Order
                        </button>
                        
                        </li>
                        <li className="has-submenu">
                            <button className="btn btn-primary mr-3">New Transaction</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
    }
}

export default DashboardHeader;