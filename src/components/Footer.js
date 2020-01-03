
import React from 'react';
import logo from '../images/logo-adalab.png';

const AppFooter = () => {
    return (
        <footer className="footer__container">
            <p className="footer__copyright">Awesome profile-cards @2019</p>
            <div className="footer__logo-container">
                <a href="https://adalab.es/" target="_blank" class="footer__link">  <img className="footer__logo" src={logo} alt="Adalab Logo" /></a>
            </div>
        </footer>
    );
}

export default AppFooter;