import '../styles/App.scss';
import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Landing from './Landing';
import Home from './Home';


// import Header from './Header';
// import Palette from './PaletteDesign';
// import Fonts from './FontsDesign';
// import CardPreview from './CardPreview';
// import SharedForm from './SharedForm';
// import Input from './InputForm';
// import AppFooter from './Footer';

//import LandingHome from'./components/landing';

class App extends React.Component {
  render() {
    return (
      <div className="Main">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Home" component={Home} />
        </Switch>
      </div >
    )
  }
}
export default App;
