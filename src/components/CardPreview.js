import React from 'react';

class Cardpreview extends React.Component {
    render() {
        return (
            <section className="preview">
                <div className="preview_card-container">
                    <button id="buttonReset" className="reset"><i class="far fa-trash-alt"></i>reset</button>
                    <div className="preview_card">
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