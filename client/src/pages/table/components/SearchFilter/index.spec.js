import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import SeachFilter from './index';

Enzyme.configure({ adapter: new Adapter() })

const data = {
    results: [
        {
            id: 1,
            name: 'Toxic Rick',
            status: 'dead',
            species: 'humanoid',
            origin: {
                name: 'earth',
            },
            location: {
                name: 'Planet 5',
            },
            image: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
            episode: [1]
        }
    ]
}

it('renders without crashing', () => {
    shallow(<SeachFilter data={data.results} />);
});

describe('<SeachFilter data={data.results} />', () => {
    /* Snapshot */
    it('renders correctly', () => {
        const component = renderer.create(<SeachFilter data={data.results} />);
        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });
});