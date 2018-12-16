import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App Test', () => {
    let shallowApp;

    const getShallowApp = () => {
        if (!shallowApp) {
            shallowApp = shallow(<App />);
        }
        return shallowApp;
    };

    beforeEach(() => {
        shallowApp = undefined;
    });

    test('Component should render without crashing', () => {
        expect(getShallowApp()).toBeDefined();
    });

    test('Component should render correctly', () => {
        expect(getShallowApp()).toMatchSnapshot();
    });

    test('Component should render AppHeader', () => {
        const wrapper = getShallowApp();
        expect(wrapper.find('AppHeader')).toBeDefined();
    });

    test('Component should render CharactersGridContainer', () => {
        const wrapper = getShallowApp();
        expect(wrapper.find('CharactersGridContainer')).toBeDefined();
    });
});
