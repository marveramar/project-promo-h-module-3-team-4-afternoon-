import '../styles/App.scss';

import React from 'react';
import Header from './Header';
// import Palette from './PaletteDesign';
// import Fonts from './FontsDesign';
import CardPreview from './CardPreview';
// import SharedForm from './SharedForm';
// import Input from './InputForm';
import AppFooter from './Footer';
import Collapsable from './Collapsable';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                name: 'Nombre Apellido',
                job: 'Front-end Developer',
                email: '',
                tel: '',
                linkedin: '',
                github: ''
            },
            errors: {}
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.getData = this.getData.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    onChangeHandler = (name, value) => {
        let { userData } = this.state;
        userData[name] = value;
        this.setState({ userData })
    }


    handleReset(e) {
        e.preventDefault();
        this.setState({
            userData: {
                name: 'Nombre Apellido',
                job: 'Front-end Developer',
                email: '',
                tel: '',
                linkedin: '',
                github: ''
            },
        });
    }


    getData = () => this.state.userData === '' ? 'algo' : this.state.userData;






    render() {
        console.log(this.state)

        return (
            <div className="Main">
                <Header></Header>
                <main className="main">
                    <CardPreview
                        nameCard={this.getData().name}
                        jobCard={this.getData().job}
                        phoneCard={this.getData().tel}
                        emailCard={this.getData().email}
                        linkedinCard={this.getData().linkedin}
                        githubCard={this.getData().github}
                        handleReset={this.handleReset}

                    ></CardPreview>
                    <form className="form_wrapper" >
                        <Collapsable
                            onChangeHandler={this.onChangeHandler}

                        />
                        {/* 
                        <Palette></Palette>
                        <Fonts></Fonts>
                        <Input
                            onChange={this.eventInput}
                            data={this.state}
                        ></Input>
                        <SharedForm></SharedForm>*/}
                    </form>
                </main>
                <AppFooter></AppFooter>
            </div >
        )
    }
}
export default Home;
