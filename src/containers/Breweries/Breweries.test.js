import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Breweries from './Breweries';

describe('Breweries', () => {
    it('fetch data from site', done => {
        var mock = new MockAdapter(axios);
        const data = { response: true };
        mock.onGet('https://api.openbrewerydb.org/breweries').reply(200, data); 
    });
});