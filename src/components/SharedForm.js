import React from 'react';
import '../styles/App.scss';
import Loader from './Loader'

const twitterHashtag = encodeURIComponent('adalab,adalaber,frontEnd,awesomeCards');
const twitterText = encodeURIComponent('He creado esta tarjeta con Awesome Profile Cards. ¡Échale un vistazo!');

class SharedForm extends React.Component {

    constructor(props) {
        super(props)
        this.handleApiFetch = this.handleApiFetch.bind(this)
    }

    handleApiFetch = (event) => {
        event.preventDefault();
        this.props.handleApiFetch();
        event.preventDefault();
    }

    render() {
        return (
            <fieldset className="fieldset fieldset__share">
                <div data-id="shareContainer" onClick={this.props.handleCollapsible} id="shareContainer" className="form_title-container">
                    <legend className="form_title"><i className="fas fa-share-alt form_title-icon"></i>COMPARTE</legend>
                    <span id="arrowShare"><i className={`fas fa-chevron-down ${this.props.isVisible === 'shareContainer' ? 'rotate' : ''}`}></i></span>
                </div>
                <div className={`share  ${this.props.isVisible === 'shareContainer' ? '' : 'hidden'}`} id="share">
                    <div className="create_card">

                        <button onClick={this.handleApiFetch} type="submit" value="submit" id="createCardButton" className={`create_card-btn ${this.props.isFormValid === true ? '' : 'btn-disabled'}`}><i
                            className="far fa-address-card"> CREAR TARJETA</i></button>

                        <span className={`error-alert ${this.props.isFormValid === false ? '' : ' hidden'}`} id="errorAlert">Faltan campos por completar</span>
                        {this.props.isLoading === true ? <Loader /> : ''}
                    </div>
                    <div className={`twitter ${this.props.isError === true ? 'hidden' : ''}`} id="twitterContainer">
                        <span className="twitter-message" id="twitterMessage">La tarjeta ha sido creada:</span>       <a href={this.props.cardUrl} target="_blank"> {this.props.cardUrl}</a>
                        <a href={`https://twitter.com/intent/tweet?text=${twitterText}&url=${this.props.cardUrl}&hashtags=${twitterHashtag}`} className="twitter-btn" id="twitterBtn" target="_blank"><i className="fab fa-twitter"></i> Compartir en twitter</a>
                        <a href={` https://www.linkedin.com/sharing/share-offsite/?url=${this.props.cardUrl}`} className="linkedin-btn" id="linkedInBtn" target="_blank"><i className="fab fa-linkedin"></i> Compartir en linkedIn</a>
                    </div>
                </div>
            </fieldset >
        )
    }
}

export default SharedForm