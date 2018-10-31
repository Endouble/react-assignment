import React from 'react';
import PropTypes from 'prop-types';

import Footer from './Footer.component';

import { FilterContext, availableFilters } from '../../context';

const FooterData = ({ setFilter }) => (
    <FilterContext.Consumer>
        {filter => <Footer options={availableFilters} filter={filter} updateFilter={setFilter} />}
    </FilterContext.Consumer>
);

/*
    Footer propTypes
*/
FooterData.propTypes = {
    setFilter: PropTypes.func,
};

FooterData.defaultProps = {
    setFilter: null,
};

export default FooterData;
