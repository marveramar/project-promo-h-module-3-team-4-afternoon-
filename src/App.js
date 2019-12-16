import React, { Component } from 'react';
import './App.scss';

import React from 'react';
import Header from './components/header';
import Palette from './components/PaletteDesign';
import Fonts from './components/FontsDesign';
import CardPreview from './components/cardpreview';
import SharedForm from './components/shared_form';
import Input from './components/inputForm';
import AppFooter from './components/footer';

//import LandingHome from'./components/landing';

class App extends React.Component {
  render() {
    return (
      <div className="Main">
        {/* <Header></Header>
        <AppFooter></AppFooter> */}
        <Palette></Palette>
        <Fonts></Fonts>
        <CardPreview></CardPreview>
        {/*<LandingHome></LandingHome>*/}
        <Input></Input>
        <SharedForm></SharedForm>
      </div >
    )
  }
}
export default App;
