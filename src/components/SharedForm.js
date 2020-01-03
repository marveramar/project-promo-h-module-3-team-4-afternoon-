import React from 'react';

const SharedForm =(props)=> {

    const handleApiFetch=(event)=>{
        event.preventDefault();
        props.handleApiFetch();
    }
        return (
            // <fieldset className="fieldset fieldset__share">
            //     <div id="shareContainer" className="form_title-container">
            //         <legend className="form_title"><i className="fas fa-share-alt form_title-icon"></i>COMPARTE</legend>
            //         <span id="arrowShare"><i className="fas fa-chevron-down"></i></span>
            //     </div>
            <div className="share" id="share">
                <div className="create_card">
                    <button onClick={handleApiFetch} type="submit" value="submit" id="createCardButton" className="create_card-btn"><i
                        className="far fa-address-card"> CREAR TARJETA</i></button>
                    <span className="error-message errorEmail">*Faltan campos por completar*</span>
                </div>
                <div className="twitter" id="twitterContainer">
                    <span className="twitter-message" id="twitterMessage">La tarjeta ha sido creada:</span>
                    <a href="" className="twitter-btn" id="twitterBtn" target="_blank"><i className="fab fa-twitter"></i> Compartir en twitter</a>
                    <a href="" className="linkedin-btn" id="linkedInBtn" target="_blank"><i className="fab fa-linkedin"></i> Compartir en linkedIn</a>
                </div>
            </div>
            // </fieldset>

        );


}


export default SharedForm