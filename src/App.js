import React, { Component } from 'react';

import './App.css';
import 'semantic-ui-css/semantic.min.css'

import { Grid } from 'semantic-ui-react';
import AppHeader from  './components/AppHeader';
import CharactersGridContainer from './containers/CharactersGridContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Grid.Row>
            <Grid.Column columns={1}>
              <AppHeader />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column columns={1}>
              <CharactersGridContainer />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
