import { getValuesByProperty } from '../utils/utils';

describe('Utils Test', () => {
    const input = [{ name: 'Falcon 1' }, { name: 'Falcon 9' }, { name: 'Falcon 9' }];
    const output = ['Falcon 1', 'Falcon 9'];
    test('Get distict values by property name', () => {
        expect(getValuesByProperty(input, 'name')).toEqual(output);
    });
});
