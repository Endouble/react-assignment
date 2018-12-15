import React, { Component } from 'react';

import { Header } from 'semantic-ui-react';

import './App.css';
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="app-header">
            <Header as='h1' inverted>
                <Header.Content>
                    Star Wars Characters
                    <Header.Subheader>a list from a far far away galaxy</Header.Subheader>
                </Header.Content>
            </Header>
        </header>
      </div>
    );
  }
}

export default App;
