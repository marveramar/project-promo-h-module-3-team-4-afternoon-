import React from 'react';
import Header from './components/header';
import CardPreview from './components/cardpreview';
import AppFooter from './components/footer';
//import LandingHome from'./components/landing';


import './App.scss';



class App extends React.Component {
  render() {
    return (
      <div className="Main">
        <Header></Header>
        <CardPreview></CardPreview>
        {/*<LandingHome></LandingHome>*/}
        <AppFooter></AppFooter>
      </div>
    )
  }

}
export default App;
