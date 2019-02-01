import React from 'react';
import { shallow } from 'enzyme';

import Image from './Image';

describe("Image Component", () => {
    it('renders without crashing', () => {
        shallow(
            <Image
                src="someSrc"
                alt="someAltText"
                originalSrc="someSrc"
                isCopiedClicked={() => {}}
                isExpandClicked={() => {}}
            />
        );
    });

    it('renders Overlay when hovered', () => {
        const image = shallow(
            <Image
                src="someSrc"
                alt="someAltText"
                originalSrc="someSrc"
                isCopiedClicked={() => {}}
                isExpandClicked={() => {}}
            />
        );
        image.simulate('mouseenter');
        expect(image.find('.Image__Overlay').exists).toBeTruthy();
    });
});

