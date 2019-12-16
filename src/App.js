import React, { Component } from 'react';
import Header from './components/header'
import AppFooter from './components/footer'


import './App.scss';



class App extends Component {
  render() {
    return (
      <div className="Main">
        <Header></Header>
        <AppFooter></AppFooter>
      </div>
    )
  }

}
export default App;
