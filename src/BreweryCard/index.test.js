import React from 'react';
import renderer from 'react-test-renderer';
import BreweryCard from './index.js';

it('BreweryCard renders correctly', () => {
    const brewery = {
        "id": 2,
        "name": "Avondale Brewing Co",
        "brewery_type": "micro",
        "street": "201 41st St S",
        "city": "Birmingham",
        "state": "Alabama",
        "postal_code": "35222-1932",
        "country": "United States",
        "longitude": "-86.774322",
        "latitude": "33.524521",
        "phone": "2057775456",
        "website_url": "http://www.avondalebrewing.com",
        "updated_at": "2018-08-23T23:19:57.825Z"
    };

    const tree = renderer
        .create(<BreweryCard brewery={brewery} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
