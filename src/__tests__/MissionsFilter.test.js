import React from 'react';
import { render } from 'react-testing-library';
import MissionsFilter from '../components/MissionsFilter';

describe('Missions Filter Test', () => {
    test('display filters title', () => {
        const { getByText } = render(<MissionsFilter missions={[]} onFilter={() => {}} />);
        getByText(/launch sites/i);
        getByText(/rocket/i);
        getByText(/launch year/i);
    });
});
