import React from 'react';
import Logo from './logo';
import Search from './search';
import Dropdown from './dropdown';
import UserProfile from './userProfile';
import DetailsWrapper from './detailswrapper';
import DashboardHeader from './dashboardHeader';

class Navbar extends React.Component{


    render(){
        return (
            <header id="topnav">
            <div className="topbar-main">
                <div className="container-fluid">
                    <Logo></Logo>
                    <div className="menu-extras topbar-custom">
                        <ul className="float-right list-unstyled mb-0 ">
                            <Search></Search>
                            <Dropdown></Dropdown>
                            <UserProfile></UserProfile>
                            {/* not used */}
                            <li className="menu-item">
                                
                                <a className="navbar-toggle nav-link" id="mobileToggle">
                                    <div className="lines">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </a>
                            </li>
                            {/* not used */}
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
            <DetailsWrapper></DetailsWrapper>
            <DashboardHeader></DashboardHeader>
        </header>
        )
    }
}

export default Navbar;