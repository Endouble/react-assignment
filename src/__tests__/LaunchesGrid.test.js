import React from 'react';
import axiosMock from 'axios';

import { render, wait } from 'react-testing-library';
import missionsMock from './missions.json';
import MissionsGrid from '../components/MissionsGrid';

/**
 * Factory function to create DOM Nodes for MissionsGrid
 * @function setup
 * @param {object} props
 * @returns {DOMNode}
 */
const setupComponent = props => render(<MissionsGrid {...props} />);

describe('Missions Grid Test', () => {
    test('fetch missions and display them', async () => {
        axiosMock.get.mockResolvedValueOnce({ data: missionsMock });
        const { container, getByText } = setupComponent();

        await wait();

        expect(axiosMock.get).toHaveBeenCalled();
        expect(getByText('MissionTest').textContent).toBe('MissionTest');
        expect(container.firstChild).toMatchSnapshot();
    });

    test('Display "No Mission Found" message when there is no mission', async () => {
        axiosMock.get.mockResolvedValueOnce({ data: [] });
        const { getByText } = setupComponent();

        await wait();

        expect(axiosMock.get).toHaveBeenCalled();
        expect(getByText(/No mission found/i).textContent).toMatch(/no mission found/i);
    });

    test('Show loader when fetching data and hide it when data is fetched', async () => {
        axiosMock.get.mockResolvedValueOnce({ data: missionsMock });
        const { getByText, queryByText } = setupComponent();
        getByText(/loading.../i);
        await wait();
        expect(queryByText(/loading.../i)).toBeNull();
    });
});
