import React from 'react';
import Header from './components/header'
//import LandingHome from'./components/landing';
import AppFooter from './components/footer'

import './App.scss';
import SharedForm from './components/shared_form';



class App extends React.Component {
  render() {
    return (
      <div className="Main">
        <Header></Header>
        {/*<LandingHome></LandingHome>*/}
        <SharedForm></SharedForm>
        <AppFooter></AppFooter>
      </div>
    )
  }

}
export default App;
