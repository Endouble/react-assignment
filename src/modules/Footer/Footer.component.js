import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { sizes, colors } from '../../styles/vars';
import { boldBorders } from '../../styles/mixins';

import Input from '../Form/Input';
import Select from '../Form/Select';

const Footer = ({ filter, updateFilter, options }) => (
    <StyledFooter>
        <Input handleChange={updateFilter} filter={filter} />
        <Select handleChange={updateFilter} filter={filter} options={options} />
    </StyledFooter>
);

/*
    Footer Styles
*/
const StyledFooter = styled.footer`
    display: flex;
    background: ${colors.magenta};
    max-width: ${sizes.desktop};
    ${boldBorders()};
    margin: 0 auto;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    padding: 10px;
`;

/*
    Footer propTypes
*/
Footer.propTypes = {
    filter: PropTypes.shape({}),
    updateFilter: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.string),
};

Footer.defaultProps = {
    filter: {},
    updateFilter: null,
    options: [],
};

export default Footer;
