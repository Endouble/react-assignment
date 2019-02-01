import React from 'react';
import { shallow, mount } from 'enzyme';

import { serialize } from '../../helpers';
import Grid from './Grid';

describe("Grid Component", () => {
    it('renders with prop searchText equals to Tupac"', () => {
        const searchText = 'Tupac';
        const grid = mount(<Grid searchText={searchText}/>);
        expect((grid).prop('searchText')).toEqual(searchText);
    });

    it('renders with no search text prop', () => {
        shallow(<Grid searchText=""/>)
    });

    it('fetches images from Giphy', done => {
        const mockSuccessResponse = {};
        const mockJsonPromise = Promise.resolve(mockSuccessResponse);
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise,
        });

        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

        const searchText = 'Tupac';
        const grid = shallow(<Grid searchText={searchText} />);
        const searchParams = grid.state().searchParams;
        const url = `/search?${serialize(Object.assign(searchParams, { api_key: process.env.REACT_APP_GIPHY_API_KEY }))}`;

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith(url);

        global.fetch.mockClear();
        done();
    });
});
