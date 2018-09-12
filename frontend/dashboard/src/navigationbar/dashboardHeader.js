import React from 'react';


const DashboardHeader = () => {

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
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader;