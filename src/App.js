import React, { Component } from 'react';
import Header from './components/header';
import CardPreview from './components/cardpreview';
import AppFooter from './components/footer';


import './App.scss';



class App extends Component {
  render() {
    return (
      <div className="Main">
        <Header></Header>
        <CardPreview></CardPreview>
        <AppFooter></AppFooter>
      </div>
    )
  }

}
export default App;
