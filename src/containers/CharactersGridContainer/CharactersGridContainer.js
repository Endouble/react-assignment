import React, { Component } from 'react';

import CharactersGrid from './../../components/CharactersGrid'

class CharactersGridContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      isLoading: false,
      onError: true
    }
  }

  render() {
    const { onError, characters, isLoading} = this.state;
    return <React.Fragment>
      <CharactersGrid />
      {onError?
        <p> An error ocurred, please try again later... </p>
        :null
      }
    </React.Fragment>
  }
}

export default CharactersGridContainer;