import React from 'react';
import ErrorMessage from './ErrorMessage'

import GetAvatar from './GetAvatar';


class Input extends React.Component {

    constructor(props) {
        super(props);

        this.onChangeHandler = this.onChangeHandler.bind(this)

    }


    onChangeHandler(event) {
        this.props.onChangeHandler(event.target.name, event.target.value);
        console.log(event.target.value)

    }


    render() {
        const userData = this.props.data;
        console.log(userData)
        return (
            <fieldset className="fieldset fieldset__fill-out">
                <div data-id="fillInContainer" onClick={this.props.handleCollapsible} id="fillInContainer" className="form_title-container">
                    <legend className="form_title"><i className="far fa-keyboard form_title-icon"></i>RELLENA</legend>
                    <span id="arrowFillIn"><i className={`fas fa-chevron-down ${this.props.isVisible === 'fillInContainer' ? 'rotate' : ''}`}></i></span>
                </div>
                <div className={`fill-in ${this.props.isVisible === 'fillInContainer' ? '' : 'hidden'}`} id="fillIn">
                    <label className="input_label" htmlFor="name">Nombre completo*</label>
                    <input
                        id="name"
                        name="name"
                        className="input"
                        placeholder="Nombre Apellido"
                        type="text"
                        value={userData.name}
                        onChange={this.onChangeHandler}
                        required

                    />
                    <ErrorMessage
                        id="error-name"
                        errorText={this.props.errorName}
                    />

                    <label className="input_label" htmlFor="job">Puesto*</label>
                    <input
                        id="job-title"
                        name="job"
                        className="input"
                        type="text"
                        placeholder="Front-end developer"
                        value={userData.job}
                        onChange={this.onChangeHandler}
                        required
                    />
                    <ErrorMessage
                        id="error-job"
                        errorText={this.props.errorJob}
                    />
                    <label className="input_label" htmlFor="photo">Imagen de perfil *</label>


                    <GetAvatar
                        photo={this.props.photo}
                        isPhotoDefault={this.props.isPhotoDefault}
                        updatePhoto={this.props.updatePhoto}
                    />

                    <div className="email-container">
                        <label className="input_label" htmlFor="email">Email*</label>
                        <input
                            id="email"
                            className="input"
                            type="email"
                            name="email"
                            placeholder="nombre.apellido@gmail.com"
                            value={userData.email}
                            onChange={this.onChangeHandler}
                            required
                        />
                        <ErrorMessage
                            id="error-email"
                            errorText={this.props.errorEmail}
                        />
                    </div>
                    <div className="phone-container">
                        <label className="input_label" htmlFor="tel">Teléfono</label>
                        <input
                            id="tel" className="input"
                            placeholder="123456789"
                            name="tel"
                            type="tel"
                            value={userData.tel}
                            onChange={this.onChangeHandler}
                            required
                        />
                        <ErrorMessage
                            id="error-phone"
                            errorText={this.props.errorPhone}
                        />
                    </div>

                    <label className="input_label" htmlFor="linkedin">Linkedin*</label>
                    <input
                        id="linkedin"
                        name="linkedin"
                        className="input"
                        placeholder="nombre de usuaria"
                        type="text"
                        value={userData.linkedin}
                        onChange={this.onChangeHandler}
                        required
                    />
                    <ErrorMessage
                        id="error-linkedin"
                        errorText={this.props.errorLinkedin}
                    />

                    <label className="input_label" htmlFor="tel">Github</label>
                    <input
                        id="github"
                        name="github"
                        className="input"
                        type="text"
                        value={userData.github}
                        onChange={this.onChangeHandler}
                        placeholder="nombre de usuaria"
                        required
                    />
                    <ErrorMessage
                        id="error-github"
                        errorText={this.props.errorGithub}
                    />
                </div >
            </fieldset>
        );
    }
}
export default Input;