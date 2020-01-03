import React, { Component } from 'react';

import Fonts from './FontsDesign';




class Palette extends Component {
    constructor(props) {
        super(props);
        this.handlePaletteChange = this.handlePaletteChange.bind(this);
    }


    handlePaletteChange(event) {
        let checkedOption = event.target.value

        console.log('hola')
        this.props.handlePaletteChange(checkedOption);
    }

    render() {
        return (
            // <fieldset className="fieldset fieldset__design">
            //     <div id="designContainer" className="form_title-container">
            //         <legend className="form_title"><i className="far fa-object-ungroup form_title-icon"></i>DISEÑA</legend>
            //         <span className="arrowDesign" id="arrowDesign"><i className="fas fa-chevron-down"></i></span>
            //     </div>
            <div className="design" id="design">
                <div className="color">
                    <p className="color_title">COLORES</p>
                    <div className="color_palettes">
                        <div className="palette-container">
                            <label htmlFor="fieldset__design--palette-4"></label>
                            <input type="radio" name="color-palette" id="fieldset__design--palette-4" className="palette-4" value="4" onChange={this.handlePaletteChange} checked={this.props.paletteValue === '4' ? true : false} />
                            <ul className="color_theme">
                                <li className="palette4-c1 item"></li>
                                <li className="palette4-c2 item"></li>
                                <li className="palette4-c3 item"></li>
                            </ul>
                        </div>
                        <div className="palette-container">
                            <label htmlFor="fieldset__design--palette-1"></label>
                            <input type="radio" name="color-palette" id="fieldset__design--palette-1" className="palette-1" value="1" onChange={this.handlePaletteChange} checked={this.props.paletteValue === '1' ? true : false} />
                            <ul className="color_theme">
                                <li className="palette1-c1 item"></li>
                                <li className="palette1-c2 item"></li>
                                <li className="palette1-c3 item"></li>
                            </ul>
                        </div>
                        <div className="palette-container">
                            <label htmlFor="fieldset__design--palette-2"></label>
                            <input type="radio" name="color-palette" id="fieldset__design--palette-2" className="palette-2"
                                value="2" onChange={this.handlePaletteChange} checked={this.props.paletteValue === '2' ? true : false} />
                            <ul className="color_theme">
                                <li className="palette2-c1 item"></li>
                                <li className="palette2-c2 item"></li>
                                <li className="palette2-c3 item"></li>
                            </ul>
                        </div>
                        <div className="palette-container">
                            <label htmlFor="fieldset__design--palette-3"></label>
                            <input type="radio" name="color-palette" id="fieldset__design--palette-3" className="palette-3"
                                value="3" onChange={this.handlePaletteChange} checked={this.props.paletteValue === '3' ? true : false} />
                            <ul className="color_theme">
                                <li className="palette3-c1 item"></li>
                                <li className="palette3-c2 item"></li>
                                <li className="palette3-c3 item"></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Fonts />
            </div>
            // </fieldset>
        )
    }
}

export default Palette;