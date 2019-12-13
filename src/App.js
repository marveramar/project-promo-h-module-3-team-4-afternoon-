import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    const header = (
      <div className="header-card">
        <img className="img" alt="mono"></img>

        <div className="name-card">
          <h2 className="name-title">Alex Guerrero</h2>
          <h4 className="name-date">Lunes, 26 de junio de 2017</h4>
        </div>
      </div>

    )
    return header
  }

}
export default App;
