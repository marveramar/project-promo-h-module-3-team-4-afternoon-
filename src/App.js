import React, { Component } from 'react';
// import Header from './components/header'
// import AppFooter from './components/footer'
import Palette from './components/PaletteDesign'
import './App.scss';
import Fonts from './components/FontsDesign';



class App extends Component {
  render() {
    return (
      <div className="Main">
        {/* <Header></Header>
        <AppFooter></AppFooter> */}
        <Palette></Palette>
        <Fonts></Fonts>
      </div>
    )
  }

}
export default App;
