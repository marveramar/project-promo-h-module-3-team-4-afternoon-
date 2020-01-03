import '../styles/App.scss';
import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Landing from './Landing';
import Home from './Home';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Home" component={Home} />
        </Switch>
      </div >
    )
  }
}
export default App;
