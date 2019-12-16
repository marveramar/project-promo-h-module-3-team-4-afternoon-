import React, { Component } from 'react';


class Fonts extends Component {
    render() {
        return (
            <fieldset className="fieldset fieldset__design">
                <div className="fonts">
                    <p className="fonts_title">FUENTES</p>
                    <div className="font_families">
                        <div className="font-container">
                            <label for="fieldset__design--font-1" className="font-montserrat">Montserrat</label>
                            <input type="radio" name="font-family" id="fieldset__design--font-1" className="font-1" value="1" checked="checked" />
                        </div>
                        <div className="font-container">
                            <label for="fieldset__design--font-2" className="font-cherry">Cherry Swash</label>
                            <input type="radio" name="font-family" id="fieldset__design--font-2" className="font-2" value="2" />
                        </div>
                        <div className="font-container">
                            <label for="fieldset__design--font-3" className="font-kalam">Charmonman</label>
                            <input type="radio" name="font-family" id="fieldset__design--font-3" className="font-3" value="3" />
                        </div>
                    </div>
                </div>
            </fieldset>
        )
    }
}

export default Fonts;