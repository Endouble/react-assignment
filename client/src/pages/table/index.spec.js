import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import TableView from'./index';
Enzyme.configure({ adapter: new Adapter() })

const data = {
    results: [
        {
            name: 'Toxic Rick',
            status: 'dead',
            species: 'humanoid',
            origin: {
                name: 'earth',
            },
            location: {
                name: 'Planet 5',
            },
            image: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg'
        }
    ]
}

it('renders without crashing', () => {
    shallow(<TableView data={data.results} />);
});

describe('<TableView />', () => {
    const wrapper = shallow(<TableView data={data.results} />);

    it('should render a class `.local-pickup__carriers-error`', () => {
      expect(wrapper.find('.local-pickup__carriers-error'));
    });

});