import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer.component';
import { FilterContext } from '../../pages/Home/Home.component';

const FooterData = ({ setFilter }) => (
    <FilterContext.Consumer>
        {filter => (<Footer filter={filter} updateFilter={setFilter} />)}
    </FilterContext.Consumer>
);

FooterData.propTypes = {
    setFilter: PropTypes.func,
};

FooterData.defaultProps = {
    setFilter: null,
};

export default FooterData;
