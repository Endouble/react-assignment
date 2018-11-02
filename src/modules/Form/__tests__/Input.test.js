import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Input from '../Input';

configure({ adapter: new Adapter() });

const props = {
    filter: {
        filterBy: 'placeholder',
    },
};

describe('Input', () => {
    it('renders correctly', () => {
        const component = shallow(<Input />);
        expect(component).toMatchSnapshot();
    });

    it('has right placeholder copy', () => {
        const component = shallow(<Input {...props} />);
        expect(component.prop('placeholder')).toEqual('filter by: placeholder');
    });
});
