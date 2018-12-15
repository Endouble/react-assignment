import React, { Component } from 'react';

import CharactersGrid from './../../components/CharactersGrid'

class CharactersGridContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      isLoading: false,
      onError: false
    }
  }

  render() {
    const { onError, characters, isLoading} = this.state;
    return <React.Fragment>
      {isLoading?
        <p>Loading...</p>
        :null
      }
      {onError?
        <p> An error ocurred, please try again later... </p>
        :null
      }
      {characters.length > 0?
        <CharactersGrid />
        :<p>No characters to view yet...</p>
      }
      
    </React.Fragment>
  }
}

export default CharactersGridContainer;