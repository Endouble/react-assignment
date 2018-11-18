import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import CharacterCard from './index';
import ReactModal from 'react-modal';

Enzyme.configure({ adapter: new Adapter() });

const results = {
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

it('renders without crashing', () => {
    shallow(<CharacterCard data={results} />);
});

describe('<CharacterCard data={results} />', () => {
    it('renders <ReactModal>', () => {
        const wrapper = shallow(<CharacterCard data={results} />);
        expect(wrapper.find(ReactModal).length).toEqual(1);
    });

    /* Snapshot */
    it('renders correctly', () => {
        const component = renderer.create(<CharacterCard data={results} />);
        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });
});
