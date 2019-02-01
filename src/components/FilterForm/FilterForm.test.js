import React from 'react';
import { shallow } from 'enzyme';

import FilterForm from './FilterForm';

describe("FilterForm Component", () => {
    it('renders without crashing', () => {
        shallow(<FilterForm handleSearch={() => {}}/>);
    });

    it('renders h1 title', () => {
        const filterForm = shallow(<FilterForm handleSearch={() => {}}/>);
        const title = <h1 className="FilterForm__Title">Giphy Search App</h1>;
        expect(filterForm.contains(title)).toEqual(true);
    });

    it('Simulates handleSearch', () => {
        const onSearchMock = jest.fn();
        const text = 'Tupac';
        const event = {target: {name: "searchInput", value: text}};
        const filterForm = shallow(<FilterForm handleSearch={onSearchMock} />);
        filterForm.find('#searchInput').simulate('change', event);
        expect(onSearchMock).toHaveBeenCalledTimes(1);
        expect(filterForm.state().inputValue).toEqual(text);
    });
});
