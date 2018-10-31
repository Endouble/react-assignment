import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from '../';

configure({ adapter: new Adapter() });

const props = {
    name: 'testing card',
    imageUrl: 'testingUrl',
};

describe('Card', () => {
    it('renders correctly', () => {
        const component = shallow(<Card {...props} />);
        expect(component).toMatchSnapshot();
    });

    it('Has image', () => {
        const component = shallow(<Card {...props} />);
        const img = component.find('.pokeCard__img');
        expect(img.exists()).toEqual(true);
    });

    it('Has right alt image text', () => {
        const component = shallow(<Card {...props} />);
        const img = component.find('.pokeCard__img');
        expect(img.prop('alt')).toEqual(props.name);
    });
});
