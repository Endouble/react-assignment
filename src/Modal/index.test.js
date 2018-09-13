import React from 'react';
import renderer from 'react-test-renderer';
import Modal from './index.js';

it('Modal renders correctly', () => {
    const props = {
        onCloseClick: () => {},
        children: 'Hello!',
    };

    const tree = renderer
        .create(<Modal {...props} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
