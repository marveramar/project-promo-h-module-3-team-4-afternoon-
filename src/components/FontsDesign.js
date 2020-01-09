import React, { Component } from 'react';


class Fonts extends Component {
    constructor(props) {
        super(props)
        this.handleFontsChange = this.handleFontsChange.bind(this)
    }

    handleFontsChange(evt) {
        let checkedFont = evt.target.value;
        this.props.handleFontsChange(checkedFont);
    }

    render() {
        return (
            <fieldset className=" fieldset__design">
                <div className="fonts">
                    <p className="fonts_title">FUENTES</p>
                    <div className="font_families">
                        <div className="font-container">
                            <label htmlFor="fieldset__design--font-1" className="font-montserrat">Montserrat</label>
                            <input type="radio" name="font-family" id="fieldset__design--font-1" className="font-1" value="1" onChange={this.handleFontsChange} checked={this.props.fontValue === '1' ? true : false} />
                        </div>
                        <div className="font-container">
                            <label htmlFor="fieldset__design--font-2" className="font-cherry">Cherry Swash</label>
                            <input type="radio" name="font-family" id="fieldset__design--font-2" className="font-2" value="2" onChange={this.handleFontsChange} checked={this.props.fontValue === '2' ? true : false} />
                        </div>
                        <div className="font-container">
                            <label htmlFor="fieldset__design--font-3" className="font-kalam">Charmonman</label>
                            <input type="radio" name="font-family" id="fieldset__design--font-3" className="font-3" value="3" onChange={this.handleFontsChange} checked={this.props.fontValue === '3' ? true : false} />
                        </div>
                    </div>
                </div>
            </fieldset>
        )
    }
}

export default Fonts;