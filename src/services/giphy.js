import { serialize } from '../helpers';

// search giphy with pagination
const giphyService = (options = {}) => {
    const params = serialize(Object.assign(options, { api_key: process.env.REACT_APP_GIPHY_API_KEY }));
    return fetch(`/search?${params}`)
        .then(resp => resp.json())
        .then(data => data)
        .catch((err) => {
            /* eslint-disable no-console */
            console.error(err.message || err);
            /* eslint-enable no-console */
            throw Error(err);
        });
};

export default giphyService;
