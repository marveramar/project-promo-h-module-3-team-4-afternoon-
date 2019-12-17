import React, { Component } from 'react';

class Palette extends Component {
    render() {
        return (
            <fieldset className="fieldset fieldset__design">
                <div id="designContainer" className="form_title-container">
                    <legend className="form_title"><i className="far fa-object-ungroup form_title-icon"></i>DISEÑA</legend>
                    <span className="arrowDesign" id="arrowDesign"><i className="fas fa-chevron-down"></i></span>
                </div>
                <div className="design" id="design">
                    <div className="color">
                        <p className="color_title">COLORES</p>
                        <div className="color_palettes">
                            <div className="palette-container">
                                <label htmlFor="fieldset__design--palette-4"></label>
                                <input type="radio" name="color-palette" id="fieldset__design--palette-4" className="palette-4" value="4" />
                                <ul className="color_theme">
                                    <li className="palette4-c1 item"></li>
                                    <li className="palette4-c2 item"></li>
                                    <li className="palette4-c3 item"></li>
                                </ul>
                            </div>
                            <div className="palette-container">
                                <label htmlFor="fieldset__design--palette-1"></label>
                                <input type="radio" name="color-palette" id="fieldset__design--palette-1" className="palette-1" value="1" />
                                <ul className="color_theme">
                                    <li className="palette1-c1 item"></li>
                                    <li className="palette1-c2 item"></li>
                                    <li className="palette1-c3 item"></li>
                                </ul>
                            </div>
                            <div className="palette-container">
                                <label htmlFor="fieldset__design--palette-2"></label>
                                <input type="radio" name="color-palette" id="fieldset__design--palette-2" className="palette-2"
                                    value="2" />
                                <ul className="color_theme">
                                    <li className="palette2-c1 item"></li>
                                    <li className="palette2-c2 item"></li>
                                    <li className="palette2-c3 item"></li>
                                </ul>
                            </div>
                            <div className="palette-container">
                                <label htmlFor="fieldset__design--palette-3"></label>
                                <input type="radio" name="color-palette" id="fieldset__design--palette-3" className="palette-3"
                                    value="3" />
                                <ul className="color_theme">
                                    <li className="palette3-c1 item"></li>
                                    <li className="palette3-c2 item"></li>
                                    <li className="palette3-c3 item"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>
        )
    }
}

export default Palette;