import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../';

configure({ adapter: new Adapter() });

describe('Header', () => {
    it('renders correctly', () => {
        const component = shallow(<Header />);
        expect(component).toMatchSnapshot();
    });
    it('Has Flash component', () => {
        const component = shallow(<Header />);
        const hasFlash = component.find('.pokeHeader__flash').exists();
        expect(hasFlash).toEqual(true);
    });
    it('Has Buttons wrapper', () => {
        const component = shallow(<Header />);
        const hasButtons = component.find('.pokeHeader__buttons').exists();
        expect(hasButtons).toEqual(true);
    });
});
