import React from 'react';
import 'jsdom-global/register';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Select from '../Select';

import { availableFilters } from '../../../context';

configure({ adapter: new Adapter() });

describe('Select', () => {
    it('renders correctly', () => {
        const component = shallow(<Select />);
        expect(component).toMatchSnapshot();
    });

    it('Has option', () => {
        const component = mount(<Select options={availableFilters} />);
        const option = component.find('option').first();
        expect(option.prop('value')).toEqual(availableFilters[0]);
    });
});
