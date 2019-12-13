import React, { Component } from 'react';
import logo from '../images/logo-awesome-profiles.svg'

// const Header = () => {
//     return (
//         <header className="header-card">
//             <img src={logo}></img>
//         </header>

//     )
// }


class Header extends Component {
    render() {
        return (
            <header>
                <div className="page__header">
                    <img src={logo} alt="logo" className="image__header"></img>
                </div>
            </header>
        )
    }
}



export default Header;