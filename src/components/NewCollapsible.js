import React from 'react';
import Palette from './PaletteDesign';
import SharedForm from './SharedForm';
import Input from './InputForm';

class NewCollapsible extends React.Component{
    constructor(props){
        super(props)
        this.state={ 
            isVisible:''
        }
        this.handleCollapsible= this.handleCollapsible.bind(this)
    }

    handleCollapsible(event){
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
          }





    render(){
        return(
            <React.Fragment>
                <Palette
                handlePaletteChange={this.props.handlePaletteChange}
                paletteValue={this.props.paletteValue}
                handleCollapsible ={this.handleCollapsible}
                isVisible ={this.state.isVisible}
                />
                <Input
                onChangeHandler={this.props.onChangeHandler}
                data={this.props.data}
                photo={this.props.photo}
                isPhotoDefault={this.props.isPhotoDefault}
                updatePhoto={this.props.updatePhoto}
                handlerOpacityLink={this.props.handlerOpacityLink}
                handleCollapsible ={this.handleCollapsible}
                isVisible ={this.state.isVisible}

                />
                <SharedForm
                handleApiFetch={this.props.handleApiFetch}
                cardUrl={this.props.cardUrl}
                handleCollapsible ={this.handleCollapsible}
                isVisible ={this.state.isVisible}
                isLoading={this.props.isLoading}
                isError={this.props.isError}
                />
            </React.Fragment>


        )
    }


}




export default NewCollapsible;