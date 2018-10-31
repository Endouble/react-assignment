import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../';

configure({ adapter: new Adapter() });

describe('Home', () => {
    it('renders correctly', () => {
        const component = shallow(<Home />);
        expect(component).toMatchSnapshot();
    });
});
