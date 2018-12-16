import React from 'react';
import { shallow, mount } from 'enzyme';

import CharactersGrid from './CharactersGrid';

describe('Characters Grid Test', () => {
  let shallowCharactersGrid;

  const getShallowCharactersGrid = (props) => {
    if (!shallowCharactersGrid) {
      shallowCharactersGrid = shallow(<CharactersGrid {...props} />);
    }
    return shallowCharactersGrid;
  }

  const charactersMock = [
    {
      name: "Luke Skywalker",
      gender: 'male',
      eye_color: 'blue',
      height: "172",
      mass: "77",
      skin_color: "fair"
    }, 
    {
      name: "R2-D2",
      gender: 'n/a',
      eye_color: 'red',
      height: "96",
      mass: "32",
      skin_color: "white,blue"
    }
  ];

  const dataCompleteMock = {
    data: {
      next: 'nextURL',
      previous: 'prevURL',
      results: charactersMock
    },
    moreCallback: jest.fn(),
    showCharacterCallback: jest.fn(),
    filterCallback: jest.fn()
  }

  const dataWONextMock = {
    data: {
      next: null,
      previous: 'prevURL',
      results: charactersMock
    },
    moreCallback: jest.fn(),
    showCharacterCallback: jest.fn(),
    filterCallback: jest.fn()
  }

  const dataWOPrevMock = {
    data: {
      next: 'nextURL',
      previous: null,
      results: charactersMock
    },
    moreCallback: jest.fn(),
    showCharacterCallback: jest.fn(),
    filterCallback: jest.fn()
  }

  const dataWOResultMock = {
    data: {
      next: null,
      previous: null,
      results: []
    },
    moreCallback: jest.fn(),
    showCharacterCallback: jest.fn(),
    filterCallback: jest.fn()
  }


  beforeEach(() => {
    shallowCharactersGrid = undefined;
  });

  test('Component should render without crashing complete', () => {
    expect(getShallowCharactersGrid(dataCompleteMock)).toBeDefined();
  });

  test('Component should render correctly with results', () => {
    expect(getShallowCharactersGrid(dataCompleteMock)).toMatchSnapshot();
  });

  test('Component should render without crashing without results', () => {
    expect(getShallowCharactersGrid(dataWOResultMock)).toBeDefined();
  });

  test('Component should render correctly without results', () => {
    expect(getShallowCharactersGrid(dataWOResultMock)).toMatchSnapshot();
  });

  test('Component should render without crashing without prev results', () => {
    expect(getShallowCharactersGrid(dataWOPrevMock)).toBeDefined();
  });
  test('Component should render correctly without prev results', () => {
    expect(getShallowCharactersGrid(dataWOPrevMock)).toMatchSnapshot();
  });

  test('Component should render without crashing without next results', () => {
    expect(getShallowCharactersGrid(dataWONextMock)).toBeDefined();
  });
  test('Component should render correctly without ndext results', () => {
    expect(getShallowCharactersGrid(dataWONextMock)).toMatchSnapshot();
  });
});