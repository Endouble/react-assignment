import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { sizes, colors } from '../../styles/vars';
import { boldBorders } from '../../styles/mixins';

import Input from '../Form/Input';

const Footer = ({ filter, updateFilter }) => (
    <StyledFooter>
        <Input updateFilter={updateFilter} filter={filter} />
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

Footer.propTypes = {
    filter: PropTypes.shape({}),
    updateFilter: PropTypes.func,
};

Footer.defaultProps = {
    filter: {},
    updateFilter: null,
};

export default Footer;
