import '../styles/App.scss';

import React from 'react';
import Header from './Header';
// import Fonts from './FontsDesign';
import CardPreview from './CardPreview';
// import SharedForm from './SharedForm';
// import Input from './InputForm';
import AppFooter from './Footer';
import Collapsable from './Collapsable';
import Palette from './PaletteDesign';

class Home extends React.Component {
    constructor(props) {

        super(props)
        this.handlePaletteChange = this.handlePaletteChange.bind(this);
        this.state = {
            userData: {
                palette: ''
            },

            paletteValue: '4'


        }


    }

    handlePaletteChange(checkedPaletteValue) {

        this.setState((prevState, props) => {
            let newPaletteValue = prevState.paletteValue;
            let newCardInfo = prevState.userData;
            if (checkedPaletteValue === '1') {
                newPaletteValue = '1'
                console.log('lala')
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
        })

    }
    render() {
        return (
            <div className="Main">
                <Header></Header>
                <main className="main">
                    <CardPreview
                        paletteValue={this.state.paletteValue}

                    />
                    <form className="form_wrapper">
                        <Collapsable
                            paletteValue={this.state.paletteValue}
                            handlePaletteChange={this.handlePaletteChange} />
                        {/* 
                        <Palette></Palette>
                        <Fonts></Fonts>
                        <Input></Input>
                        <SharedForm></SharedForm> */}
                    </form>
                </main>
                <AppFooter></AppFooter>
            </div >
        )
    }
}
export default Home;

                // handlePaletteChange(checkedPaletteValue) {

                //     this.setState((prevState, props) => {
                //         let newPaletteValue = prevState.paletteValue;
                //         if (checkedPaletteValue === '1') {
                //             newPaletteValue = '1'
                //         }
                //         if (checkedPaletteValue === '2') {
                //             newPaletteValue = '2'
                //         }
                //         if (checkedPaletteValue === '3') {
                //             newPaletteValue = '3'
                //         }
                //         if (checkedPaletteValue === '4') {
                //             newPaletteValue = '4'
                //         }
                //         return {
                //             paletteValue: newPaletteValue
                //         }
                //     })
                // }