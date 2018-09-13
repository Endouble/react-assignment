import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

class BreweryCard extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(evt) {
        this.props.onClick(evt, this.props.brewery.id);
    }

    render() {
        const {
            brewery,
        } = this.props;

        return (
            <div
                tabIndex={0}
                className="Brewery-card"
                onFocus={() => {}}
                onKeyDown={() => {}}
                role="button"
                onClick={this.onClick}
            >
                {brewery.name}
            </div>
        );
    }
}

BreweryCard.defaultProps = {
    onClick: () => {},
};

BreweryCard.propTypes = {
    onClick: PropTypes.func,
    brewery: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
    }).isRequired,
};

export default BreweryCard;
