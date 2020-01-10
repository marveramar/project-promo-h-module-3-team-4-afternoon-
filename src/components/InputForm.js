import React from 'react';
import GetAvatar from './GetAvatar';

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.validationEmail = this.validationEmail.bind(this)
        this.validationPhone = this.validationPhone.bind(this)
    }

    onChangeHandler(event) {
        this.props.onChangeHandler(event.target.name, event.target.value);
    }

    validationEmail() {
        this.props.validationEmail()
    }
    validationPhone() {
        this.props.validationPhone()
    }

    render() {
        const userData = this.props.data;
        return (
            <fieldset className="fieldset fieldset__fill-out" >
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
                            onKeyUp={this.validationEmail}
                            required
                        />
                        <span className={`error-alert ${this.props.errorEmail === true ? '' : ' hidden'}`} id="errorAlert">El email introducido no es válido</span>
                    </div>
                    <div className="phone-container">
                        <label className="input_label" htmlFor="tel">Teléfono</label>
                        <input
                            id="tel" className="input"
                            placeholder="123456789"
                            name="phone"
                            type="tel"
                            value={userData.phone}
                            onChange={this.onChangeHandler}
                            onKeyUp={this.validationPhone}
                            required
                        />
                        <span className={`error-alert ${this.props.errorPhone === true ? '' : ' hidden'}`} id="errorAlert">El teléfono introducido no es válido</span>
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
                </div >
            </fieldset>
        );
    }
}

export default Input;