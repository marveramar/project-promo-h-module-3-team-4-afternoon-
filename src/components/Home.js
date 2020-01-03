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
import defaultImage from './defaultImage';
import { handleApiFetch} from '../service/ApiFetch'

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
            isAvatarDefault: true,
            profile: {
                avatar: defaultImage
            },
            errors: {},
            urlApi:''
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.getData = this.getData.bind(this);
        this.updateAvatar = this.updateAvatar.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleApiFetch= this.handleApiFetch.bind(this);
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
                photo: '',
                email: '',
                tel: '',
                linkedin: '',
                github: ''
            },
        });
    }


    getData = () => this.state.userData === '' ? 'algo' : this.state.userData;

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

    handleApiFetch(){
        handleApiFetch(this.state.userData)
        .then(data=>{
            this.setState({
                createCard: data
            })
            console.log(data)
          })
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
                            handleApiFetch={this.handleApiFetch}

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
