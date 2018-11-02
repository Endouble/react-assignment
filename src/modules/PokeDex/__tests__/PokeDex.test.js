import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PokeDex from '../';

configure({ adapter: new Adapter() });

describe('PokeDex', () => {
    it('renders correctly', () => {
        const component = shallow(<PokeDex />);
        expect(component).toMatchSnapshot();
    });
});
