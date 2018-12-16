import React from 'react';
import { shallow, mount } from 'enzyme';

import CharactersGridContainer from './CharactersGridContainer';

import swapiMock from './swapi.mocks.json';

const mockResponse = (status, statusText, response) => new window.Response(response, {
    status,
    statusText,
    headers: {
        'Content-type': 'application/json',
    },
});

describe('Characters Grid Container Test', () => {
    let shallowCharactersGridContainer;

    const getShallowCharactersGridContainer = () => {
        if (!shallowCharactersGridContainer) {
            shallowCharactersGridContainer = shallow(<CharactersGridContainer />);
        }
        return shallowCharactersGridContainer;
    };

    beforeEach(() => {
        shallowCharactersGridContainer = undefined;
    });

    test('Component should render without crashing', () => {
        expect(getShallowCharactersGridContainer()).toBeDefined();
    });

    test('Component should render correctly', () => {
        expect(getShallowCharactersGridContainer()).toMatchSnapshot();
    });

    test('Component should call componentDidMount and get characters', () => {
        global.fetch = jest.fn().mockImplementation(
            () => Promise.resolve(mockResponse(200, null, JSON.stringify(swapiMock))),
        );
        const componentDidMount = jest.spyOn(CharactersGridContainer.prototype, 'componentDidMount');
        const wrapper = mount(<CharactersGridContainer />);

        expect(wrapper).toBeDefined();
        expect(componentDidMount).toHaveBeenCalled();
    });

    test('Component should call getStarWarsCharacters when filter is applied', () => {
        const wrapper = getShallowCharactersGridContainer();
        wrapper.instance().getStarWarsCharacters = jest.fn();
        wrapper.instance().filterCharacters({ name: 'Luke Skywalker' });
        expect(wrapper.instance().getStarWarsCharacters).toHaveBeenCalled();
    });

    test('Component should render Characters Grid', () => {
        const wrapper = getShallowCharactersGridContainer();
        expect(wrapper.find('CharactersGrid')).toBeDefined();
    });

    test('Component should show character modal only when character is selected', () => {
        const wrapper = getShallowCharactersGridContainer();
        wrapper.setState({ selectedCharacter: swapiMock.results[0] });
        expect(wrapper.find('CharacterModal')).toBeDefined();

        wrapper.setState({ selectedCharacter: null });
        expect(wrapper.find('CharacterModal')).toHaveLength(0);
    });

    test('Component should show spinner while loading', () => {
        const wrapper = getShallowCharactersGridContainer();
        wrapper.setState({ isLoading: true });
        expect(wrapper.find('Loader')).toBeDefined();
    });

    test('Component should show error message when on error', () => {
        const wrapper = getShallowCharactersGridContainer();
        wrapper.setState({ onError: true });
        expect(wrapper.find('Message')).toBeDefined();
    });
});
