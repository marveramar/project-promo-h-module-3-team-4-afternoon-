
import React from 'react';
import { Accordion, AccordionItem } from 'react-sanfona';
import Palette from './PaletteDesign';
import SharedForm from './SharedForm';
import Input from './InputForm';

class Collapsable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            styling: ''
        };


    }


    render() {


        return (
            <fieldset className="fieldset fieldset__design">
                <div className="form_title-container">


                    <Accordion>
                        {[<div id="designContainer" className="form_title-container">
                            <legend className="form_title"><i className="far fa-object-ungroup form_title-icon"></i>DISEÑA</legend>
                            <span className="arrowDesign" id="arrowDesign"><i className={"fas fa-chevron-down "}></i></span>
                        </div>, <div id="fillInContainer" className="form_title-container">
                            <legend className="form_title"><i className="far fa-keyboard form_title-icon"></i>RELLENA</legend>
                            <span id="arrowFillIn"><i className="fas fa-chevron-down"></i></span>
                        </div>, <div id="shareContainer" className="form_title-container">
                            <legend className="form_title"><i className="fas fa-share-alt form_title-icon"></i>COMPARTE</legend>
                            <span id="arrowShare"><i className="fas fa-chevron-down"></i></span>
                        </div>].map((item, index, id) => {

                            return (<AccordionItem
                                key={index}
                                title={item}
                                id={index}
                            >
                                <div ref="itemRef">
                                    {index === 0 ? (<Palette
                                        handlePaletteChange={this.props.handlePaletteChange}
                                        paletteValue={this.props.paletteValue}

                                    />) : null}
                                    {index === 1 ? (<Input
                                        onChangeHandler={this.props.onChangeHandler}
                                        data={this.props.data}
                                        photo={this.props.photo}
                                        isPhotoDefault={this.props.isPhotoDefault}
                                        updatePhoto={this.props.updatePhoto}
                                        handlerOpacityLink={this.props.handlerOpacityLink}

                                    />) : null}
                                    {index === 2 ? (<SharedForm
                                        handleApiFetch={this.props.handleApiFetch}
                                        cardUrl={this.props.cardUrl}
                                    />) : null}
                                </div>
                            </AccordionItem>
                            );
                        }
                        )}
                    </Accordion>
                </div >
            </fieldset >
        )
    }
}

export default Collapsable;