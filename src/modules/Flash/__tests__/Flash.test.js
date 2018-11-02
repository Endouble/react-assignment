import React from 'react';
import 'jsdom-global/register';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Flash from '../';

import { colors } from '../../../styles/vars';

configure({ adapter: new Adapter() });

describe('Flash', () => {
    it('renders correctly', () => {
        const component = shallow(<Flash />);
        expect(component).toMatchSnapshot();
    });
    it('Has default button color', () => {
        const component = mount(<Flash />);
        const child = component.find('Button');
        expect(child.prop('backColor')).toEqual(colors.blue);
    });
});
