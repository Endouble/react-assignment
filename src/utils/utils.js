/**
 * Helper function to get distict values from an array of object given a property name
 * @function getValuesByProperty
 * @param {array} objs
 * @param {string} property
 * @return {array}
 */
export function getValuesByProperty(objs, property) {
    const values = objs.reduce((prev, value) => {
        if (!prev.includes(value[property])) {
            return [...prev, value[property]];
        }
        return prev;
    }, []);
    return values;
}
