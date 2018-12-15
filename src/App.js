import React, { Component } from 'react';

import './App.css';
import 'semantic-ui-css/semantic.min.css'

import AppHeader from  './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
      </div>
    );
  }
}

export default App;
