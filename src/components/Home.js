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
let userData = '';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {

                palette: '',
                font: '',
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
        localStorage.setItem('userData', JSON.stringify(userData))

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

    // getLocal(dataLocalStorage) {
    //     dataLocalStorage = localStorage.getItem('userData');
    //     if (!dataLocalStorage) {
    //         return userData
    //     } else {
    //         JSON.parse(dataLocalStorage);

    //     }
    // }
    componentDidMount() {
        const getLocal = JSON.parse(localStorage.getItem('userData'));
        if (getLocal !== null) {
            this.setState({ userData: getLocal })
        }
    }








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
                        opacity={this.state.opacity}

                    ></CardPreview>
                    <form className="form_wrapper" >
                        <Collapsable
                            onChangeHandler={this.onChangeHandler}
                            nameCard={this.state.userData.name}
                            jobCard={this.getData().job}
                            phoneCard={this.getData().tel}
                            emailCard={this.getData().email}
                            linkedinCard={this.getData().linkedin}
                            githubCard={this.getData().github}
                        // getLocal={this.getLocal}

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
