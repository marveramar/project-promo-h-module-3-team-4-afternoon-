import '../styles/App.scss';
import React from 'react';
import Header from './Header';
import CardPreview from './CardPreview';
import AppFooter from './Footer';
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
            dataUrl: '',
            paletteValue: '4',
            fontValue: '1',
            errorEmail: false,
            errorPhone: false,
            isFormValid: false,
            isLoading: false,
            isError: true
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.getData = this.getData.bind(this);
        this.updatePhoto = this.updatePhoto.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleApiFetch = this.handleApiFetch.bind(this);
        this.handlePaletteChange = this.handlePaletteChange.bind(this);
        this.validationEmail = this.validationEmail.bind(this);
        this.validationPhone = this.validationPhone.bind(this);
        this.validationHandler = this.validationHandler.bind(this);
        this.handleFontsChange = this.handleFontsChange.bind(this);
        this.isLoadingChange = this.isLoadingChange.bind(this);
    }

    validationEmail() {
        if (this.state.userData.email === '' || !this.state.userData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            this.setState({
                errorEmail: true
            })
        } else {
            this.setState({
                errorEmail: false
            })
        }
    }

    validationPhone() {
        if (!this.state.userData.phone.match(/^[0-9]{9}/)) {
            this.setState({ errorPhone: true })
        } else {
            this.setState({ errorPhone: false })

        }
    }


    validationHandler() {
        const { name, job, linkedin, github } = this.state.userData;
        const { errorPhone, errorEmail } = this.state;

        if (name === '' || job === '' || linkedin === '' || github === '' || errorPhone === true || errorEmail === true) {
            this.setState({ isFormValid: false })
        } else {
            this.setState({ isFormValid: true })
        }
    }



    onChangeHandler = (name, value) => {
        let { userData } = this.state;
        userData[name] = value;
        this.setState({ userData })
        localStorage.setItem('userData', JSON.stringify(userData));
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
                userData: { ...newCardInfo, palette: newPaletteValue }
            }
        }
        )
    }

    handleFontsChange(checkedFontValue) {
        this.setState((prevState, props) => {
            let newFontValue = prevState.fontValue;
            let newCardFont = prevState.userData;
            if (checkedFontValue === '1') {
                newFontValue = '1'
            }
            if (checkedFontValue === '2') {
                newFontValue = '2'
            }
            if (checkedFontValue === '3') {
                newFontValue = '3'
            }
            return {
                fontValue: newFontValue,
                userData: { ...newCardFont, "font": newFontValue }
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

    getData = () => this.state.userData === '' ? 'fail' : this.state.userData;

    componentDidMount() {
        const getLocal = JSON.parse(localStorage.getItem('userData'));
        if (getLocal !== null) {
            this.setState({
                userData: getLocal,
            })
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

    isLoadingChange() {
        this.setState({ isLoading: true })
    }

    handleApiFetch() {
        const getItem = JSON.parse(localStorage.getItem('userData'));
        handleApiFetch(getItem)
            .then(data => {
                this.setState({
                    dataUrl: data.cardURL,
                    isLoading: false,
                    isError: false
                })
            })
        this.isLoadingChange()
    }

    render() {
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
                        fontValue={this.state.fontValue}
                    ></CardPreview>
                    <form className="form_wrapper" >
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
                            errorEmail={this.state.errorEmail}
                            errorPhone={this.state.errorPhone}
                            isFormValid={this.state.isFormValid}
                            validationEmail={this.validationEmail}
                            validationPhone={this.validationPhone}
                            validationHandler={this.validationHandler}
                            handleFontsChange={this.handleFontsChange}
                            fontValue={this.state.fontValue}
                            isLoading={this.state.isLoading}
                            isError={this.state.isError}
                        />
                    </form>
                </main>
                <AppFooter></AppFooter>
            </div >
        )
    }
}

export default Home;