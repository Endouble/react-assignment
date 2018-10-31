import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../';

configure({ adapter: new Adapter() });

describe('Button', () => {
    it('renders correctly', () => {
        const component = shallow(<Button />);
        expect(component).toMatchSnapshot();
    });
    it('renders not plain Button', () => {
        const component = shallow(<Button isPlain={false} />);
        const type = component.find('.pokeButton').type();
        expect(type).toEqual('button');
    });
});
