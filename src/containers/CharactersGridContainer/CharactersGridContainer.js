import React, { Component } from 'react';

import { Container, Dimmer, Loader, Message } from 'semantic-ui-react';

import CharactersGrid from './../../components/CharactersGrid';
import CharacterModal from './../../components/CharacterModal';

const API_URL = 'https://swapi.co/api/people/';

class CharactersGridContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isLoading: false,
      onError: false,
      selectedCharacter: null
    }
  }

  getStarWarsCharacters = (url) => {
    window.scrollTo(0,0);
    this.setState({ isLoading: true });

    window.fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          data,
          isLoading: false,
          onError: false
        })
        return data;
      })
      .catch(
        err => 
          this.setState({
            isLoading: false,
            onError: true
          })
      )
  }

  filterCharacters = (filter) => {
    this.getStarWarsCharacters(`${API_URL}?search=${filter.name}`)
  }

  showCharacterModal = (character) => {
    this.setState({ selectedCharacter: character });
  }

  closeCharacterModal = () => {
    this.setState({ selectedCharacter: null });
  }

  componentDidMount() {
    this.getStarWarsCharacters(API_URL);
  }

  render() {
    const { onError, data, isLoading, selectedCharacter} = this.state;
    return <Container>
      <CharactersGrid
        data={data} 
        moreCallback={this.getStarWarsCharacters} 
        showCharacterCallback={this.showCharacterModal} 
        filterCallback={this.filterCharacters}/>
      
      {selectedCharacter?
        <CharacterModal character={selectedCharacter} onCloseCallback={this.closeCharacterModal} />
        :null
      }

      {isLoading?
        <Dimmer active>
          <Loader> Loading </Loader>
        </Dimmer>
        :null
      }

      {onError?
        <Message>
          <p> An error ocurred, please try again later... </p>
        </Message>
        :null
      }
      
    </Container>
  }
};

export default CharactersGridContainer;