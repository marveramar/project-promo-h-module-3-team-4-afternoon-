import '../styles/App.scss';

import React from 'react';
import Header from './Header';
import Palette from './PaletteDesign';
import Fonts from './FontsDesign';
import CardPreview from './CardPreview';
import SharedForm from './SharedForm';
import Input from './InputForm';
import AppFooter from './Footer';

//import LandingHome from'./components/landing';

class App extends React.Component {
  render() {
    return (
      <div className="Main">
        {/*<LandingHome></LandingHome>*/}
        <Header></Header>
        <Palette></Palette>
        <Fonts></Fonts>
        <Input></Input>
        <SharedForm></SharedForm>
        <CardPreview></CardPreview>
        <AppFooter></AppFooter>
      </div >
    )
  }
}
export default App;
