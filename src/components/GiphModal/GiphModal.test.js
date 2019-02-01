import React from 'react';
import { shallow } from 'enzyme';

import GiphModal from './GiphModal';

describe("GiphModal Component", () => {
    it('renders without crashing', () => {
        shallow(<GiphModal imageSrc="" toggle={() => {}} />);
    });
});

