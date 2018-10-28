import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';
import Flash from '../Button/Flash.component';

import { colors } from '../../styles/vars';
import { boldBorders } from '../../styles/mixins';

const Header = () => (
    <StyledHeader>
        <div className="pokeHeader__flash">
            <Flash />
        </div>
        <div className="pokeHeader__buttons">
            <Button sizeIndex={4} backColor={colors.red} />
            <Button sizeIndex={4} backColor={colors.yellow} />
            <Button sizeIndex={4} backColor={colors.green} />
        </div>
    </StyledHeader>
);

/*
    Header Styles
*/
const StyledHeader = styled.header`
    background: ${colors.magenta};
    border-bottom: 8px solid ${colors.darkPurple};
    ${boldBorders()};
    display: flex;

    .pokeHeader__flash {
        padding: 15px;
        text-align: center;
    }

    .pokeHeader__buttons {
        overflow: hidden;
        display: flex;
        padding-top: 8px;

        > div {
            margin-right: 15px;
        }
    }

`;

/*
    Header propTypes
*/
Header.propTypes = {
    // children: PropTypes.node,
};
Header.defaultProps = {
    // children: null,
};

export default Header;
