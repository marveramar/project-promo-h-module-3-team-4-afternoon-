import React from 'react';
import Palette from './PaletteDesign';
import SharedForm from './SharedForm';
import Input from './InputForm';

class NewCollapsible extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: ''
    }
    this.handleCollapsible = this.handleCollapsible.bind(this)

  }

  handleCollapsible(event) {
    let idName = event.currentTarget.getAttribute('data-id');
    console.log(idName)
    this.setState((prevState, props) => {
      if (idName === prevState.isVisible) {
        return { isVisible: null };
      } else {
        return {
          isVisible: idName
        };
      }
    });
    if (idName === 'shareContainer') {
      this.props.validationHandler()
    }
  }









  render() {
    return (
      <React.Fragment>
        <Palette
          handlePaletteChange={this.props.handlePaletteChange}
          paletteValue={this.props.paletteValue}
          handleCollapsible={this.handleCollapsible}
          isVisible={this.state.isVisible}
          category='share'
        />
        <Input
          onChangeHandler={this.props.onChangeHandler}
          data={this.props.data}
          photo={this.props.photo}
          isPhotoDefault={this.props.isPhotoDefault}
          updatePhoto={this.props.updatePhoto}
          handlerOpacityLink={this.props.handlerOpacityLink}
          handleCollapsible={this.handleCollapsible}
          isVisible={this.state.isVisible}
          errorEmail={this.props.errorEmail}
          errorName={this.props.errorName}
          errorPhone={this.props.errorPhone}
          validationEmail={this.props.validationEmail}
          validationPhone={this.props.validationPhone}



        />
        <SharedForm
          handleApiFetch={this.props.handleApiFetch}
          cardUrl={this.props.cardUrl}
          handleCollapsible={this.handleCollapsible}
          isVisible={this.state.isVisible}
          isFormValid={this.props.isFormValid}

        />
      </React.Fragment>


    )
  }


}




export default NewCollapsible;