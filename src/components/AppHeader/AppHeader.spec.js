import React from 'react';
import { shallow } from 'enzyme';

import AppHeader from './AppHeader';

describe('Header Test', () => {
  let shallowHeader;

  const getShallowHeader = () => {
    if (!shallowHeader) {
      shallowHeader = shallow(<AppHeader />)
    }

    return shallowHeader;
  };

  beforeEach(() => {
    shallowHeader = undefined;
  });

  test('Component should render without crashing', () => {
    expect(getShallowHeader()).toBeDefined();
  });

  test('Component should render correctly', () => {
    expect(getShallowHeader()).toMatchSnapshot();
  });
});