import React, { Component } from 'react';

import './App.css';
import 'semantic-ui-css/semantic.min.css'

import { Grid } from 'semantic-ui-react';
import AppHeader from  './components/AppHeader';
import CharactersGrid from './components/CharactersGrid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Grid.Row>
            <AppHeader />
          </Grid.Row>

        </Grid>
      </div>
    );
  }
}

export default App;
