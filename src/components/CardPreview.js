import React from 'react';

class Cardpreview extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        const { props } = this;

        let paletteValue = props.paletteValue;
        const selectDesign = props => {

            if (paletteValue === '4') {
                return 'design-color4'

            }
            if (paletteValue === '1') {
                return 'design-color1'
            }
            if (paletteValue === '2') {
                return 'design-color2'
            }
            if (paletteValue === '3') {
                return 'design-color3'
            }
            console.log('hghg')
        }

        return (
            <section className="preview">

                <div className={`preview_card-container ${selectDesign()}`}>

                    <button id="buttonReset" className="reset"><i className="far fa-trash-alt"></i>reset</button>
                    <div className="preview_card design-color1">
                        <div className="preview_card-head">
                            <h2 className="preview_card-name">nombre apellido</h2>
                            <h3 className="preview_card-job">Front-end developer</h3>
                        </div>
                        <div className="preview_card-image js__profile-image"></div>
                        <ul className="preview_card-social">
                            <li className="item item_phone opacity">
                                <a className="item_btn" id="phone-icon" href="">
                                    <i className="fas fa-mobile-alt" id="preview_card-icons"></i>
                                </a>
                            </li>
                            <li className="item item_email opacity">
                                <a className="item_btn" id="email-icon" href="">
                                    <i className="far fa-envelope" id="preview_card-icons"></i>
                                </a>
                            </li>
                            <li className="item item_linkedin opacity">
                                <a className="item_btn" id="linkedin-icon" target="_blank" href="">
                                    <i className="fab fa-linkedin-in" id="preview_card-icons"></i>
                                </a>
                            </li>
                            <li className="item item_github opacity">
                                <a className="item_btn" id="github-icon" target="_blank" href="">
                                    <i className="fab fa-github-alt" id="preview_card-icons"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}
export default Cardpreview;