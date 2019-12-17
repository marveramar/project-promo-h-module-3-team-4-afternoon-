import React, { Component } from 'react';



class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            job: '',
            email: '',
            tel: '',
            linkedin: '',
            github: '',
        };

        this.eventName = this.eventName.bind(this);
        this.eventJob = this.eventJob.bind(this);
        this.eventEmail = this.eventEmail.bind(this);
        this.eventTel = this.eventTel.bind(this);
        this.eventLinkedin = this.eventLinkedin.bind(this);
        this.eventGithub = this.eventGithub.bind(this);
    }

    eventName(event) {
        this.setState({ name: event.target.value });
    }

    eventJob(event) {
        this.setState({ job: event.target.value })
    }

    eventEmail(event) {
        this.setState({ email: event.target.value })
    }

    eventTel(event) {
        this.setState({ tel: event.target.value })
    }

    eventLinkedin(event) {
        this.setState({ linkedin: event.target.value })
    }

    eventGithub(event) {
        this.setState({ github: event.target.value })
    }



    render() {
        return (
            <fieldset className="fieldset fieldset__fill-out">
                <div id="fillInContainer" className="form_title-container">
                    <legend className="form_title"><i className="far fa-keyboard form_title-icon"></i>RELLENA</legend>
                    <span id="arrowFillIn"><i className="fas fa-chevron-down"></i></span>
                </div>
                <div className="fill-in" id="fillIn">
                    <label className="input_label" htmlFor="name">Name*</label>
                    <input id="name" className="input" placeholder="Nombre Apellido" type="text" value={this.state.name} onChange={this.eventName} />
                    <span className="error-alert" id="errorAlert"></span>

                    <label className="input_label" htmlFor="job">Puesto*</label>
                    <input id="job-title" className="input" type="text" placeholder="Front-end developer" value={this.state.job} onChange={this.eventJob} />
                    <span className="error-alert" id="errorAlert"></span>

                    <div className="add-image-container">
                        <button type="button" className="btn-add-image js__profile-trigger">Añadir imagen</button>
                        <div className="preview-image js__profile-preview"></div>
                        <span className="error-alert" id="errorAlert"></span>
                    </div>

                    <div className="email-container">
                        <label className="input_label" htmlFor="email">Email*</label>
                        <input id="email" className="input" type="email" name="email" placeholder="nombre.apellido@gmail.com" value={this.state.email} onChange={this.eventEmail} />
                        <span className="error-alert" id="errorAlert"></span>
                    </div>
                    <div className="phone-container">
                        <label className="input_label" htmlFor="tel">Teléfono</label>
                        <input id="tel" className="input" placeholder="123456789" name="tel" type="tel" value={this.state.tel} onChange={this.eventTel} />
                        <span class="error-alert" id="errorAlert"></span>
                    </div>

                    <label className="input_label" htmlFor="linkedin">Linkedin*</label>
                    <input id="linkedin" className="input" placeholder="nombre de usuaria" type="text" value={this.state.linkedin} onChange={this.eventLinkedin} />

                    <label className="input_label" htmlFor="tel">Github</label>
                    <input id="github" className="input" type="text" value={this.state.github} onChange={this.eventGithub} placeholder="nombre de usuaria" />
                    <span class="error-alert" id="errorAlert"></span>


                </div>

            </fieldset>
        );
    }
}

export default Input;






