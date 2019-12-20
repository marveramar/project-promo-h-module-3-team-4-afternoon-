import React, { Component } from 'react';



class Input extends Component {


    render() {

        const userData = this.props.data;
        const action = this.props.onChange;

        return (

            <fieldset className="fieldset fieldset__fill-out">
                <div id="fillInContainer" className="form_title-container">
                    <legend className="form_title"><i className="far fa-keyboard form_title-icon"></i>RELLENA</legend>
                    <span id="arrowFillIn"><i className="fas fa-chevron-down"></i></span>
                </div>
                <div className="fill-in" id="fillIn">
                    <label className="input_label" htmlFor="name">Name*</label>
                    <input value={userData.name} id="name" className="input" name="name" placeholder="Nombre Apellido" type="text" onChange={action} />
                    <span className="error-alert" id="errorAlert"></span>

                    <label className="input_label" htmlFor="job">Puesto*</label>
                    <input value={userData.job} id="job-title" className="input" type="text" placeholder="Front-end developer" onChange={action} />
                    <span className="error-alert" id="errorAlert"></span>

                    <div className="add-image-container">
                        <button type="button" className="btn-add-image js__profile-trigger">Añadir imagen</button>
                        <div className="preview-image js__profile-preview"></div>
                        <span className="error-alert" id="errorAlert"></span>
                    </div>

                    <div className="email-container">
                        <label className="input_label" htmlFor="email">Email*</label>
                        <input id="email" className="input" type="email" name="email" placeholder="nombre.apellido@gmail.com" />
                        <span className="error-alert" id="errorAlert"></span>
                    </div>
                    <div className="phone-container">
                        <label className="input_label" htmlFor="tel">Teléfono</label>
                        <input id="tel" className="input" placeholder="123456789" name="tel" type="tel" />
                        <span class="error-alert" id="errorAlert"></span>
                    </div>

                    <label className="input_label" htmlFor="linkedin">Linkedin*</label>
                    <input id="linkedin" className="input" placeholder="nombre de usuaria" type="text" />

                    <label className="input_label" htmlFor="tel">Github</label>
                    <input id="github" className="input" type="text" placeholder="nombre de usuaria" />
                    <span class="error-alert" id="errorAlert"></span>


                </div>

            </fieldset>

        );
    }
}

export default Input;






