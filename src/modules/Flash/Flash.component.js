import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from '../Button';

import { boxShadow, rotateAnim } from '../../styles/mixins';
import { colors } from '../../styles/vars';


const Flash = ({ isLoading }) => (
    <StyledFlash isLoading={isLoading}>
        <Button isPlain backColor={colors.blue} />
    </StyledFlash>
);

/*
    Flash Styles
*/
const StyledFlash = styled.div`
    ${boxShadow(5)}
    background: white;
    border-radius: 50%;
    padding: 30px;
    display: inline-block;
    position: relative;

    &:after {
        content: '';
        left: 0px;
        right: 0;
        bottom: 0;
        top: 0;
        background: transparent;
        display: block;
        position: absolute;
        border-radius: 50%;
        border: 10px solid;
        border-color: transparent ${colors.blue} ${colors.blue} transparent;
        transform: ${props => !props.isLoading && 'rotateZ(45deg)'};
        animation: ${props => (props.isLoading ? rotateAnim : 'none')};

    }
`;

/*
    Flash propTypes
*/
Flash.propTypes = {
    isLoading: PropTypes.bool,
};

Flash.defaultProps = {
    isLoading: false,
};

export default Flash;
