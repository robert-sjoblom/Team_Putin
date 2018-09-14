import React from 'react';


const Logo = () => {

    return (
        <div className="logo">                
            <a href="index.html" className="logo">
                <img src={require('../assets/images/logo-sm.png')} alt="" className="logo-small"/>
                <img src={require('../assets/images/logo.png')} alt="" className="logo-large"/>
            </a>
        </div>
    )
}

export default Logo;