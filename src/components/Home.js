import '../styles/App.scss';

import React from 'react';
import Header from './Header';
import Palette from './PaletteDesign';
import Fonts from './FontsDesign';
import CardPreview from './CardPreview';
import SharedForm from './SharedForm';
import Input from './InputForm';
import AppFooter from './Footer';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.getDataName();


    }

    getDataName() {
        return {
            name: '',
            job: '',
            email: '',
            tel: '',
            linkedin: '',
            github: ''

        }

    }

    // eventName(event) {
    //     this.setState(
    //         { userInfo: event.target.value });
    //     this.forceUpdate()
    // }



    eventInput = event => {
        let key = event.currentTarget.id;
        let userInfo = event.target.value;
        this.setState(
            {
                [key]: `${userInfo}`
            },
            this.saveData

        );
    }

    getName() {
        if (this.state.name === "") {
            return "Nombre y Apellidos";
        } else {
            return `${this.state.name}`
                ;
        }

    }

    getJob() {
        if (this.state.job === "") {
            return "Front End Developer";
        } else {
            return `${this.state.job}`;
        }
    }

    render() {
        console.log(this.state)

        return (
            <div className="Main">
                <Header></Header>
                <main className="main">
                    <CardPreview nameCard={this.getName()} jobCard={this.getJob()}></CardPreview>
                    <form className="form_wrapper">
                        <Palette></Palette>
                        <Fonts></Fonts>
                        <Input
                            onChange={this.eventInput}
                            data={this.state}
                        ></Input>
                        <SharedForm></SharedForm>
                    </form>
                </main>
                <AppFooter></AppFooter>
            </div >
        )
    }
}
export default Home;
