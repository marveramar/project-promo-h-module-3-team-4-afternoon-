import React from 'react';
import logo from '../images/logo-awesome-profiles.svg'

const Header = () => {
    return (
        <header className="page__header">
            <img src={logo} alt="logo" className="image__header"></img>
        </header>
    )
}

export default Header;
