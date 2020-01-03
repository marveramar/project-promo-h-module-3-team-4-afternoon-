import React, { Component } from 'react';
import GetAvatar from './GetAvatar';



class Input extends Component {
    constructor(props) {
        super(props)
        this.onChangeHandler = this.onChangeHandler.bind(this)

    }

    onChangeHandler(event) {
        this.props.onChangeHandler(event.target.name, event.target.value)
    }



    render() {

        const userData = this.props.userData;

        return (
            // <fieldset className="fieldset fieldset__fill-out">
            //     <div id="fillInContainer" className="form_title-container">
            //         <legend className="form_title"><i className="far fa-keyboard form_title-icon"></i>RELLENA</legend>
            //         <span id="arrowFillIn"><i className="fas fa-chevron-down"></i></span>
            //     </div>
            <div className="fill-in" id="fillIn">
                <label className="input_label" htmlFor="name">Name*</label>
                <input
                    id="name"
                    name="name"
                    className="input"
                    placeholder="Nombre Apellido"
                    type="text"
                    value={userData}
                    onChange={this.onChangeHandler}
                />
                <span className="error-alert" id="errorAlert"></span>

                <label className="input_label" htmlFor="job">Puesto*</label>
                <input
                    id="job-title"
                    name="job"
                    className="input"
                    type="text"
                    placeholder="Front-end developer"
                    value={userData}
                    onChange={this.onChangeHandler}
                />
                <span className="error-alert" id="errorAlert"></span>

                <label className="input_label" htmlFor="photo">Imagen de perfil *</label>
                {/* <input id="photo" type="file" name="photo" className="photo js__profile-upload-btn" value="" required></input>
                <div className="add-image-container">

                    <button type="button" className="btn-add-image js__profile-trigger">Añadir imagen</button>
                    <div className="preview-image js__profile-preview"></div>
                    <span className="error-alert" id="errorAlert"></span>
                </div> */}

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
                        value={userData}
                        onChange={this.onChangeHandler}
                    />
                    <span className="error-alert" id="errorAlert"></span>
                </div>
                <div className="phone-container">
                    <label className="input_label" htmlFor="tel">Teléfono</label>
                    <input
                        id="tel" className="input"
                        placeholder="123456789"
                        name="tel"
                        type="tel"
                        value={userData}
                        onChange={this.onChangeHandler}
                    />
                    <span className="error-alert" id="errorAlert"></span>
                </div>

                <label className="input_label" htmlFor="linkedin">Linkedin*</label>
                <input
                    id="linkedin"
                    name="linkedin"
                    className="input"
                    placeholder="nombre de usuaria"
                    type="text"
                    value={userData}
                    onChange={this.onChangeHandler}
                />

                <label className="input_label" htmlFor="tel">Github</label>
                <input
                    id="github"
                    name="github"
                    className="input"
                    type="text"
                    value={userData}
                    onChange={this.onChangeHandler}
                    placeholder="nombre de usuaria"
                />
                <span className="error-alert" id="errorAlert"></span>


            </div>

            // </fieldset>
        );
    }
}

export default Input;






