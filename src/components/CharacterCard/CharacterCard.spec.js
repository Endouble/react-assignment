import React from 'react';
import { shallow, mount } from 'enzyme';

import CharacterCard from './CharacterCard';

describe('Character Card Test', () => {
  let props;
  let shallowCharacterCard;

  const getCharacterCard = () => {
    if (!shallowCharacterCard) {
      shallowCharacterCard = shallow(<CharacterCard {...props} />)
    }
    return shallowCharacterCard;
  };

  beforeEach(() => {
    props = {
      character: {
        name: "Luke Skywalker"
      },
      showCharacterModal: jest.fn()
    };

    shallowCharacterCard = undefined;
  });

  test('Component should render without crashing', () => {
    expect(getCharacterCard()).toBeDefined();
  });
})