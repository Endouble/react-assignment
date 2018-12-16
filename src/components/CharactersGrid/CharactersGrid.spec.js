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

  test('Component should render character cards when there are results', () => {
    const charactersGrid = getShallowCharactersGrid(dataCompleteMock);
    expect(charactersGrid.find('CharacterCard')).toHaveLength(dataCompleteMock.data.results.length);
  });

  test('Component should render 0 character cards when there are no results', () => {
    const charactersGrid = getShallowCharactersGrid(dataWOResultMock);
    expect(charactersGrid.find('CharacterCard')).toHaveLength(0);
  });

  test('Component should render prev and next buttons when complete', () => {
    const charactersGrid = getShallowCharactersGrid(dataCompleteMock);
    expect(charactersGrid.find('#results-row #actions')).toHaveLength(1);
  });

  test('Component should not render actions buttons row when no results', () => {
    const charactersGrid = getShallowCharactersGrid(dataWOResultMock);
    expect(charactersGrid.find('#results-row #actions')).toHaveLength(0);
  });

  test('Component should render Filters component', () => {
    const charactersGrid = getShallowCharactersGrid(dataCompleteMock);
    expect(charactersGrid.find('Filters')).toHaveLength(1);
  });
});