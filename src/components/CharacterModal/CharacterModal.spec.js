import React from 'react';
import { shallow, mount } from 'enzyme';

import CharacterModal from './CharacterModal';

describe('Character Modal Test', () => {
  let props;
  let shallowCharacterModal;

  const getShallowCharacterModal = () => {
    if (!shallowCharacterModal) {
      shallowCharacterModal = shallow(<CharacterModal {...props} />)
    }
    return shallowCharacterModal;
  };

  beforeEach(() => {
    props = {
      character: {
        name: "Luke Skywalker",
        gender: 'male',
        eye_color: 'blue',
        height: "172",
        mass: "77",
        skin_color: "fair"
      },
      onCloseCallback: jest.fn()
    };

    shallowCharacterModal = undefined;
  });

  test('Component should render without crashing', () => {
    expect(getShallowCharacterModal()).toBeDefined();
  });

  test('Component should render correctly', () => {
    expect(getShallowCharacterModal()).toMatchSnapshot();
  });

  test('Component should render character data', () => {
    const wrapper = mount(<CharacterModal {...props} />);
    const characterModalHeader = wrapper.find('.header');
    const characterModalContent = wrapper.find('.content .description');
    const expectedHeader = expect.stringMatching(/^.*Luke Skywalker/);
    const expectedContentGender = expect.stringMatching(/^.*Gender:male/);
    const expectedContentEyes = expect.stringMatching(/^.*Eye color:blue/);
    const expectedContentHeight = expect.stringMatching(/^.*Height:172/);
    const expectedContentMass = expect.stringMatching(/^.*Mass:77/);
    const expectedContentSkin = expect.stringMatching(/^.*Skin color:fair/);

    expect(characterModalHeader.text()).toEqual(expectedHeader);
    expect(characterModalContent.find('#gender').text()).toEqual(expectedContentGender);
    expect(characterModalContent.find('#eyes').text()).toEqual(expectedContentEyes);
    expect(characterModalContent.find('#height').text()).toEqual(expectedContentHeight);
    expect(characterModalContent.find('#mass').text()).toEqual(expectedContentMass);
    expect(characterModalContent.find('#skin').text()).toEqual(expectedContentSkin);
  });
})