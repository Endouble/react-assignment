import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Brewery = (props) => {
    const {
        brewery,
    } = props;

    return (
        <div className="Brewery">
            <div className="Brewery__title">{brewery.name}</div>
            <div className="Brewery__info-item">Country: {brewery.country}</div>
            <div className="Brewery__info-item">State: {brewery.state}</div>
            <div className="Brewery__info-item">City: {brewery.city}</div>
            <div className="Brewery__info-item">Phone: {brewery.phone}</div>
            <div className="Brewery__info-item">Website: <a href={brewery.website_url}>{brewery.website_url}</a></div>
        </div>
    );
};

Brewery.propTypes = {
    brewery: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        country: PropTypes.string,
        city: PropTypes.string,
        phone: PropTypes.string,
        website_url: PropTypes.string,
    }).isRequired,
};

export default Brewery;
