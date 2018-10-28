import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { sizes, colors } from '../../styles/vars';
import { boldBorders } from '../../styles/mixins';

import Button from '../Button';
import Input from '../Form/Input';

const Footer = ({ filter, updateFilter }) => {
    console.log('filter ----> debug');
    console.log(filter);
    return (
        <StyledFooter>
            <Input updateFilter={updateFilter} filter={filter} />
            <Button isPlain={false} />
            {filter.d}
        </StyledFooter>
    );
};

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
