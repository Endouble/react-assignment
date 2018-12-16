import React from 'react';
import { shallow, mount } from 'enzyme';

import Filters from './Filters';

describe('Filters Test', () => {
  let shallowFilters;

  const props = {
    filterCallback: jest.fn()
  };

  const getShallowFilter = () => {
    if (!shallowFilters) {
      shallowFilters = shallow(<Filters {...props} />);
    }
    return shallowFilters;
  };

  beforeEach(() => {
    shallowFilters = undefined;
  });

  test('Component should render without crashing', () => {
    expect(getShallowFilter()).toBeDefined();
  });

  test('Component should render correctly', () => {
    expect(getShallowFilter()).toMatchSnapshot();
  });

  test('Component should call filterCallback on click over submit', () => {
    const filter = mount(<Filters {...props} />);
    const filterForm = filter.find('Form');
    filterForm.simulate('submit', { preventDefault: jest.fn(), key: 'Enter' });
    expect(props.filterCallback).toHaveBeenCalled();
  });
});