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

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ name: event.target.value });
    }

    render() {
        return (
            <form>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" value={this.state.name} onChange={this.handleChange} />
                <label htmlFor="job">Puesto:</label>
                <input id="name" type="text" placeholder="front" value={this.state.job} onChange={this.handleChange} />
                <label htmlFor="email">Email:</label>
                <input id="name" type="text" placeholder="" value={this.state.email} onChange={this.handleChange} />
                <label htmlFor="tel">Teléfono:</label>
                <input id="name" type="text" value={this.state.tel} onChange={this.handleChange} />
                <label htmlFor="tel">Linkedin:</label>
                <input id="name" type="text" value={this.state.linkedin} onChange={this.handleChange} />
                <label htmlFor="tel">Github:</label>
                <input id="name" type="text" value={this.state.github} onChange={this.handleChange} />
                <input type="submit" value="Enviar" />
            </form>
        );
    }
}

export default Input;






