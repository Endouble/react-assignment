import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import HomeView from'./index';

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
    shallow(<HomeView />);
});

describe('<HomeView />', () => {
    const wrapper = shallow(<HomeView />);

    it('should render a class `.header`', () => {
      expect(wrapper.find('.header'));
    });

    /* Snapshot */
    it('renders correctly', () => {
        const component = renderer.create(<HomeView />);
        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });
});