import React, { Component } from 'react';

import CharactersGrid from './../../components/CharactersGrid';
import { Container, Dimmer, Loader } from 'semantic-ui-react';

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

  getStarWarsCharacters = (url) => {
    window.scrollTo(0,0);
    this.setState({ isLoading: true });

    fetch(url)
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

  componentDidMount() {
    this.getStarWarsCharacters(API_URL);
  }

  render() {
    const { onError, data, isLoading} = this.state;
    return <Container>

      <CharactersGrid data={data} moreCallback={this.getStarWarsCharacters}/>

      {isLoading?
        <Dimmer active>
          <Loader> Loading </Loader>
        </Dimmer>
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