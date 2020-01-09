import React from 'react';
import '../styles/App.scss';
import ErrorMessage from './ErrorMessage'

class SharedForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

        this.handleApiFetch = this.handleApiFetch.bind(this)
    }

    handleApiFetch = (event) => {
        this.props.handleApiFetch();
        event.preventDefault();

    }





    render() {
        return (
            <fieldset className="fieldset fieldset__share" >
                <div data-id="shareContainer" onClick={this.props.handleCollapsible} id="shareContainer" className="form_title-container">
                    <legend className="form_title"><i className="fas fa-share-alt form_title-icon"></i>COMPARTE</legend>
                    <span id="arrowShare"><i className={`fas fa-chevron-down ${this.props.isVisible === 'shareContainer' ? 'rotate' : ''}`}></i></span>
                </div>
                <div className={`share  ${this.props.isVisible === 'shareContainer' ? '' : 'hidden'}`} id="share">
                    <div className="create_card">
                        <button onClick={this.handleApiFetch} type="submit" value="submit" id="createCardButton" className={`create_card-btn ${this.props.isFormValid === true ? '' : 'btn-disabled'}`}><i
                            className="far fa-address-card"> CREAR TARJETA</i></button>

                        {/* <span className="error-message errorEmail">*Faltan campos por completar*</span> */}
                        <span className={`error-alert ${this.props.isFormValid === false ? '' : ' hidden'}`} id="errorAlert">Faltan campos por completar</span>
                    </div>
                    <div className="twitter" id="twitterContainer">
                        <span className="twitter-message" id="twitterMessage">La tarjeta ha sido creada:</span>       <a href={this.props.cardUrl} target="_blank"> {this.props.cardUrl}</a>


                        <a href="" className="twitter-btn" id="twitterBtn" target="_blank"><i className="fab fa-twitter"></i> Compartir en twitter</a>
                        <a href="" className="linkedin-btn" id="linkedInBtn" target="_blank"><i className="fab fa-linkedin"></i> Compartir en linkedIn</a>
                    </div>
                </div>
            </fieldset>

        )

    }


}


export default SharedForm