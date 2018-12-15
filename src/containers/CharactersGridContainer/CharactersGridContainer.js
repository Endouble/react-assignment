import React, { Component } from 'react';

import CharactersGrid from './../../components/CharactersGrid';
import { Container } from 'semantic-ui-react';

class CharactersGridContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [{name: 'R2D2', info: 'Very good Robot'}],
      isLoading: false,
      onError: false
    }
  }

  render() {
    const { onError, characters, isLoading} = this.state;
    return <Container>
      {isLoading?
        <p>Loading...</p>
        :null
      }
      {onError?
        <p> An error ocurred, please try again later... </p>
        :null
      }
      <CharactersGrid characters={characters}/>
      
    </Container>
  }
};

export default CharactersGridContainer;