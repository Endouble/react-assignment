import React from 'react';
import { shallow, mount } from 'enzyme';

import CharacterCard from './CharacterCard';

describe('Character Card Test', () => {
  let props;
  let shallowCharacterCard;

  const getCharacterCard = () => {
    if (!shallowCharacterCard) {
      shallowCharacterCard = shallow(<CharacterCard {...props} />);
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

  test('Component should render correctly', () => {
    expect(getCharacterCard()).toMatchSnapshot();
  });

  test('Component should render name', () => {
    const wrapper = mount(<CharacterCard {...props} />);
    const characterCard = wrapper.find('Card');
    const expected = expect.stringMatching(/^.*Luke Skywalker/);
    expect(characterCard.find('CardHeader').text()).toEqual(expected);
  });

  test('Component should render View More link', () => {
    const wrapper = mount(<CharacterCard {...props} />);
    const characterCard = wrapper.find('Card');
    const expected = expect.stringMatching(/^.*View More/);
    expect(characterCard.find('CardContent[extra=true]').text()).toEqual(expected);
  });

  test('Component should call showCharacterModal func on Click over View More link ', () => {
    const wrapper = getCharacterCard();
    const card = wrapper.find('Card CardContent[extra=true] Button');
    card.simulate('click', { preventDefault: jest.fn() });
    expect(props.showCharacterModal).toHaveBeenCalled();
  });

  test('Component should call showCharacterModal func on key press over card ', () => {
    const wrapper = getCharacterCard();
    const card = wrapper.find('Card');
    card.simulate('keypress', { preventDefault: jest.fn(), key: 'Enter' });
    expect(props.showCharacterModal).toHaveBeenCalled();
  });
})