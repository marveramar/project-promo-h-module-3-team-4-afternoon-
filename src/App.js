import React from 'react';
import Header from './components/header'
//import LandingHome from'./components/landing';
import AppFooter from './components/footer'

import './App.scss';



class App extends React.Component {
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
