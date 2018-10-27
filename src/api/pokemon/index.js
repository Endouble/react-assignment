import axios from 'axios';

const serverUrl = 'https://api.pokemontcg.io/v1';

const urls = {
    pokemon: `${serverUrl}/cards?pageSize=12&types=fire`,
};

/*
    Get Pokemons API
*/
const getPokemons = () => axios.get(urls.pokemon)
    .then(response => response.data)
    .catch((error) => {
        throw new Error(error);
    });

export default getPokemons;
