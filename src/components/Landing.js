import React from 'react';
import logoAwesom from '../images/logo-awesome-profiles.svg';
import { Link } from 'react-router-dom'
import AppFooter from './Footer'


class Landing extends React.Component {
    render() {
        return (
            <div className="landing_wrapper">
                <main className="landing-main_wrapper">
                    <div className="ldng-logo">
                        <img className="ldng-logo__img" src={logoAwesom} alt="Welcome to the Awesome profile-cards website!" />
                    </div>
                    <div className="ldng-text">
                        <h1 className="ldng-text__title">Crea tu tarjeta de visita</h1>

                        <p className="ldng-text__expl">Crea mejores contactos profesionales de forma fácil y cómoda</p>
                    </div>
                    <div className="ldng-chartIcons">
                        <div className="ldng-chartIcons__container"> <i className="far fa-object-ungroup ldng-icon"></i>

                            <div className="ldng-chartIcons__text">diseña</div>
                        </div>
                        <div className="ldng-chartIcons__container"> <i className="far fa-keyboard ldng-icon"></i>

                            <div className="ldng-chartIcons__text">rellena</div>
                        </div>
                        <div className="ldng-chartIcons__container"> <i className="fas fa-share-alt ldng-icon"></i>

                            <div className="ldng-chartIcons__text">comparte</div>
                        </div>
                    </div> <Link className="ldng-btn" to="/Home">comenzar</Link>
                </main>
                <AppFooter />
            </div>

        )
    };



};

export default Landing;

