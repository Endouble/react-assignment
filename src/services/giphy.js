import serializeObject from '../helpers/serializerr';

// search giphy with pagination
const searchGiphy = (options = {}) => {
    const params = serializeObject(Object.assign(options, { api_key: process.env.REACT_APP_GIPHY_API_KEY }));
    return fetch(`/search?${params}`)
        .then(resp => resp.json())
        .then(data => data)
        .catch((err) => {
            // eslint-disable-next-line no-use-before-define
            console.error(err);
        });
};

export default searchGiphy;
