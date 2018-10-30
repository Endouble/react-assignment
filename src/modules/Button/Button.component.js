import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from '../../styles/vars';
import { boxShadow } from '../../styles/mixins';

const Button = props => (
    <StyledButton {...props}>
        {props.isPlain ?
            <div className="pokeButton">
                {props.copy}
            </div> :
            <button className="pokeButton" type="button">
                {props.copy}
            </button>
        }
    </StyledButton>
);

/*
    Button Styles
*/
const StyledButton = styled.div`
    .pokeButton {
        width: ${({ sizeIndex }) => sizeIndex * 10}px;
        height: ${({ sizeIndex }) => sizeIndex * 10}px;
        left: 0;
        top: 0;
        border-radius: 50%;
        position: relative;
        transition: all 250ms ease;
        ${({ isPlain }) => (!isPlain && boxShadow(8))};
        border: ${({ isPlain }) => (isPlain ? '4px solid' : 'none')};
        background: ${({ backColor }) => backColor || colors.gray};

        &:hover, &:active {
            left: ${({ isPlain }) => (!isPlain && '8px' : '0')};
            top: ${({ isPlain }) => (!isPlain && '8px' : '0')};
            ${({ isPlain }) => (!isPlain && boxShadow(0))};

        }

        &:before {
            content: '';
            position: absolute;
            background: white;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            left: 20%;
            top: 20%;
        }

        &:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            box-shadow: 5px 5px 0 0 black;
            opacity: 0.2;
            bottom: 10%;
            right: 10%;
        }
    }

`;

/*
    Button propTypes
*/
Button.propTypes = {
    copy: PropTypes.string,
    className: PropTypes.string,
    backColor: PropTypes.string,
    isPlain: PropTypes.bool,
    sizeIndex: PropTypes.number,
};

Button.defaultProps = {
    copy: '',
    className: '',
    backColor: '',
    isPlain: true,
    sizeIndex: 5,
};

export default Button;
