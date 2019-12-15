import React, { Component } from 'react';
import Header from './components/header'
// import LandingHome from'./components/landing';
import AppFooter from './components/footer'

import './App.scss';



class App extends Component {
  render() {
    return (
      <div className="Main">
        <Header></Header>
        {/*<LandingHome></LandingHome>*/}
        <AppFooter></AppFooter>
      </div>
    )
  }

}
export default App;
