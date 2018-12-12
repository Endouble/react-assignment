import React, { Component } from 'react';
import './App.css';
import Breweries from './containers/Breweries/Breweries';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Breweries/>
      </div>
    );
  }
}

export default App;
