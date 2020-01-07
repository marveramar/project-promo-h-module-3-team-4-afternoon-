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
import { handleApiFetch } from '../service/ApiFetch'
import NewCollapsible from './NewCollapsible';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {

                palette: '',
                font: '',
                name: '',
                job: '',
                photo: defaultImage,
                email: '',
                phone: '',
                linkedin: '',
                github: ''
            },
            isPhotoDefault: true,
            errors: {},
            dataUrl: '',
            paletteValue: '4',
            validation: [{ name: 'maria', job: 'developer', email: 'maria@person.com', phone: 684975012, linkedin: 'mariafernandez', github: 'mariafdez' }]
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.getData = this.getData.bind(this);
        this.updatePhoto = this.updatePhoto.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleApiFetch = this.handleApiFetch.bind(this);
        this.handlePaletteChange = this.handlePaletteChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }


    onChangeHandler = (name, value, error) => {
        let { userData, errors } = this.state;
        userData[name] = value;
        errors[name] = error;
        this.setState({ userData, errors })
        localStorage.setItem('userData', JSON.stringify(userData))

    }

    handlePaletteChange(checkedPaletteValue) {
        this.setState((prevState, props) => {
            let newPaletteValue = prevState.paletteValue;
            let newCardInfo = prevState.userData;
            if (checkedPaletteValue === '1') {
                newPaletteValue = '1'
            }
            if (checkedPaletteValue === '2') {
                newPaletteValue = '2'
            }
            if (checkedPaletteValue === '3') {
                newPaletteValue = '3'
            }
            if (checkedPaletteValue === '4') {
                newPaletteValue = '4'
            }
            return {
                paletteValue: newPaletteValue,
                userData: { ...newCardInfo, "palette": newPaletteValue }
            }
        }
        )
    }


    handleReset(e) {
        e.preventDefault();
        this.setState({
            userData: {

                font: '',
                palette: 1,
                name: '',
                job: '',
                photo: defaultImage,
                email: '',
                phone: '',
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
    updatePhoto(img) {
        const { userData } = this.state;
        const newProfile = { ...userData, photo: img };
        this.setState(prevState => {
            return {
                userData: newProfile,
                isPhotoDefault: false
            }
        });
        localStorage.setItem('userData', JSON.stringify(newProfile))
    }

    onFormSubmit(evt) {
        const validation = [...this.state.validation];
        const person = this.state.userData;
        evt.preventDefault();

        if (this.validate()) return;

        this.setState({
            validation: validation.concat(person),
            userData: {
                name: '',
                job: '',
                email: '',
                phone: '',
                linkedin: '',
                github: ''
            }
        })
    }

    validate() {
        const person = this.state.userData;
        const errors = this.state.errors;
        const errMessages = Object.keys(errors).filter(k => errors[k]);

        if (!person.name) return true;
        if (!person.job) return true;
        if (!person.email) return true;
        if (!person.phone) return true;
        if (!person.linkedin) return true;
        if (!person.github) return true;
        if (errMessages.length) return true;

        return false;
    }

    handleApiFetch() {
        const getItem = JSON.parse(localStorage.getItem('userData'));
        handleApiFetch(getItem)
            .then(data => {
                console.log(data)
                this.setState({
                    dataUrl: data.cardURL
                })
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
                        phoneCard={this.getData().phone}
                        emailCard={this.getData().email}
                        linkedinCard={this.getData().linkedin}
                        githubCard={this.getData().github}
                        photo={this.state.userData.photo}
                        handleReset={this.handleReset}
                        opacity={this.state.opacity}
                        paletteValue={this.state.paletteValue}
                    ></CardPreview>
                    <form className="form_wrapper" onSubmit={this.onFormSubmit}>
                        <NewCollapsible
                            componentDidMount={this.componentDidMount}
                            rotateArrow={this.rotateArrow}
                            onChangeHandler={this.onChangeHandler}
                            photo={this.state.userData.photo}
                            isPhotoDefault={this.state.isPhotoDefault}
                            updatePhoto={this.updatePhoto}
                            handleApiFetch={this.handleApiFetch}
                            cardUrl={this.state.dataUrl}
                            data={this.state.userData}
                            handlePaletteChange={this.handlePaletteChange}
                            paletteValue={this.state.paletteValue}
                            disabled={this.validate()}

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
