import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from '../../styles/vars';

const Button = ({ className, copy, backColor, isShiny }) => (
    <StyledButton className={className} backColor={backColor} isShiny={isShiny}>
        <button className="pokeButton" type="button">
            {copy}
        </button>
    </StyledButton>
);

/*
    Button Styles
*/
const StyledButton = styled.div`
    .pokeButton {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        box-shadow: 3px 3px 0px ${colors.darkMagenta};
        border: ${props => (props.isShiny ? '4px solid' : 'none')};
        cursor: pointer;
        background: ${props => props.backColor || colors.gray};
    }

`;

/*
    Button propTypes
*/
Button.propTypes = {
    copy: PropTypes.string,
    className: PropTypes.string,
    backColor: PropTypes.string,
    isShiny: PropTypes.bool,

};
Button.defaultProps = {
    copy: '',
    className: '',
    backColor: '',
    isShiny: false,

};

export default Button;
