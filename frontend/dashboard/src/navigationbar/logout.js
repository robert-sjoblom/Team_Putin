import React from 'react';


const Logo = ({logout}) => {

    return (
        <a className="dropdown-item text-danger" onClick={logout} href="#"><i className="mdi mdi-power text-danger"></i> Logout</a>
    )
}

export default Logo;