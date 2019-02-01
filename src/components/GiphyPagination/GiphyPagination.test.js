import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import GiphyPagination from './GiphyPagination';

describe("GiphyPagination Component", () => {
    it('renders without crashing', () => {
        shallow(<GiphyPagination pages={[1,2,3,4]} currentPage={1} onPageClicked={() => {}} />);
    });

    it('renders PaginationItems', () => {
        const giphyPagination = mount(<GiphyPagination pages={[1,2,3,4]} currentPage={1} onPageClicked={() => {}} />);
        expect(giphyPagination.find('button')).not.toBeNull();
    });

    it('Simulates onPageClicked', () => {
        const onPageClickedMock = sinon.spy();
        const giphyPagination = mount(<GiphyPagination pages={[1,2,3,4]} currentPage={1} onPageClicked={onPageClickedMock} />);
        giphyPagination.find('button').last().simulate('click');
        expect(onPageClickedMock.calledOnce).toBeTruthy();
    });
});
