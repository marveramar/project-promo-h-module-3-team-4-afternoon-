import React from 'react';
import logo from '../images/logo-awesome-profiles.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="page__header">
            <Link to="/"><img src={logo} alt="logo" className="image__header" /></Link>
        </header>
    )
}

export default Header;
