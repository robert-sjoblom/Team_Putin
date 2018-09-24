import React from 'react';
import Requests from '../Request';
import DashboardHeader from './dashboardHeader';
import DetailsWrapper from './detailswrapper';
import Dropdown from './dropdown';
import Logo from './logo';
import Search from './search';
import UserProfile from './userProfile';

class Navbar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            notes: [],
            update: ''
        }
    }

    componentDidMount(){
        this.setState({...this.state, update: this.props.test})
        Requests.get('notifications')
            .then(res => this.setState({...res}))
            .catch((err) => console.log(err));
        
        console.log(this.props);
    }

    // updateTransactions(){
    //     Requests.get('notifications')
    //         .then(res => this.setState({...res}))
    //         .then(() => console.log(this.state, "hello from navwrapper"))
    //         .catch((err) => console.log(err));
    // }

    render(){
        return (
            <header id="topnav">
            <div className="topbar-main">
                <div className="container-fluid">
                    <Logo></Logo>
                    <div className="menu-extras topbar-custom">
                        <ul className="float-right list-unstyled mb-0 ">
                            <Search></Search>
                            <Dropdown notes={this.state.notes}></Dropdown>
                            <UserProfile logout={this.props.logout}></UserProfile>
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