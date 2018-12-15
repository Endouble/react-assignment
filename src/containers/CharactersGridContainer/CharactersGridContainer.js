import React, { Component } from 'react';

import CharactersGrid from './../../components/CharactersGrid';
import { Container } from 'semantic-ui-react';

const API_URL = 'https://swapi.co/api/people/';

class CharactersGridContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isLoading: false,
      onError: false
    }
  }

  getStarWarCharacters = () => {
    this.setState({ isLoading: true });

    fetch(API_URL)
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
        this.setState({
          isLoading: false,
          onError: true
        })
      )
    // this.setState({ characters: [{name: 'R2D2', info: 'Very good Robot'}] });
  }

  componentDidMount() {
    this.getStarWarCharacters();
  }

  render() {
    const { onError, data, isLoading} = this.state;
    return <Container>

      <CharactersGrid characters={data?data.results:[]}/>

      {isLoading?
        <p>Loading...</p>
        :null
      }
      {onError?
        <p> An error ocurred, please try again later... </p>
        :null
      }
      
    </Container>
  }
};

export default CharactersGridContainer;