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
import defaultImage from './defaultImage';

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
            isAvatarDefault: true,
            profile: {
                avatar: defaultImage
            },
            errors: {}
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.getData = this.getData.bind(this);
        this.updateAvatar = this.updateAvatar.bind(this);
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
        localStorage.clear()
    }


    getData = () => this.state.userData === '' ? 'algo' : this.state.userData;

    componentDidMount() {
        const getLocal = JSON.parse(localStorage.getItem('userData'));
        if (getLocal !== null) {
            this.setState({ userData: getLocal })
        }
    }
    updateAvatar(img) {
        const { profile } = this.state;
        this.setState(prevState => {
            const newProfile = { ...profile, avatar: img };
            return {
                profile: newProfile,
                isAvatarDefault: false
            }
        });
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
                        avatar={this.state.profile.avatar}
                        handleReset={this.handleReset}
                        opacity={this.state.opacity}

                    ></CardPreview>
                    <form className="form_wrapper" >
                        <Collapsable
                            onChangeHandler={this.onChangeHandler}
                            avatar={this.state.profile.avatar}
                            isAvatarDefault={this.state.isAvatarDefault}
                            updateAvatar={this.updateAvatar}

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
