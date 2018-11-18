const fetch = require('isomorphic-fetch');

class rickAndMortyService {
  static characters() {
    const url = 'https://rickandmortyapi.com/api/character';
    return fetch(url).then(response => response.json());
  }
}

module.exports = rickAndMortyService;