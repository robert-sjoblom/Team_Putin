import React from 'react';
import LogOut from './logout';


class UserProfile extends React.Component {

    state = {loggedOut: false};
    logOut = this.props.logout;

    render(){
        return (
            <li className="dropdown notification-list">
                <div className="dropdown notification-list nav-pro-img">
                    <a className="dropdown-toggle nav-link arrow-none waves-effect nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                        <img src={require('../assets/images/users/user-4.jpg')} alt="user" className="rounded-circle"/>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
                        
                        <a className="dropdown-item" href="#"><i className="mdi mdi-account-circle m-r-5"></i> Profile</a>
                        <a className="dropdown-item" href="#"><i className="mdi mdi-wallet m-r-5"></i> My Wallet</a>
                        <a className="dropdown-item d-block" href="#"><span className="badge badge-success float-right">11</span><i className="mdi mdi-settings m-r-5"></i> Settings</a>
                        <a className="dropdown-item" href="#"><i className="mdi mdi-lock-open-outline m-r-5"></i> Lock screen</a>
                        <div className="dropdown-divider"></div>
                        <LogOut logout={this.logOut}></LogOut>
                    </div>                                                                    
                </div>
            </li>
        )
    }
}

export default UserProfile;
