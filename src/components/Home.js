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
            errors: {},
            dataUrl: '',

            paletteValue: '4',
            fontValue: '1',

            isLoading: false,
            isError: true
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.getData = this.getData.bind(this);
        this.updatePhoto = this.updatePhoto.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleApiFetch = this.handleApiFetch.bind(this);
        this.handlePaletteChange = this.handlePaletteChange.bind(this);
        this.handleFontsChange = this.handleFontsChange.bind(this);
    }


    onChangeHandler = (name, value) => {
        let { userData } = this.state;
        userData[name] = value;
        this.setState({ userData })
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
    }


    render() {
        console.log(this.state.isLoading, '121212')

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
                            handleFontsChange={this.handleFontsChange}
                            fontValue={this.state.fontValue}
                            isLoading={this.state.isLoading}
                            isError={this.state.isError}

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
