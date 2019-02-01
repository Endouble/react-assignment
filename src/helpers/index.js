/**
 * takes an object
 * and return it as string
 * like the following
 * const obj = {firstName: 'hamzah', lastName: 'Murrar'}
 * return it as
 * firstName=Hamzah&lastName=Murrar
 * @param obj
 * @returns {string}
 */
export const serialize = obj => Object.keys(obj).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');

/**
 * takes a number and generate an array of numbers from
 * [0, ...number]
 * and takes away the 0
 * @param number
 * @returns {number[]}
 */
export const generateArrayFromNumber = (number) => {
    // special case for 2
    if (number === 2) {
        return [1, 2];
    }
    const array = [];
    for (let i = 1; i <= number; i += 1) {
        array.push(i);
    }
    return array;
};
