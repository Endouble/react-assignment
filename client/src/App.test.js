import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import App from './App';

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
    shallow(<App />);
});

describe('<App />', () => {
        it('should render an `.App`', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App'));
    })

    /* Snapshot */
    it('renders correctly', () => {
        const component = renderer.create(<App />);
        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });
});