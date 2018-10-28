import React from 'react';
import styled from 'styled-components';

import { sizes } from '../../styles/vars';

const Input = () => (
    <StyledInput />
);

/*
    Input Styles
*/
const StyledInput = styled.input`
    max-width: ${sizes.desktop};
    margin: 0 auto;
`;

/*
    Input propTypes
*/


export default Input;
