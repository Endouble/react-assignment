import React from 'react';
import styled from 'styled-components';

import { sizes, colors } from '../../styles/vars';
import { boldBorders } from '../../styles/mixins';

import Button from '../Button';
import Input from '../Form/Input';

const Footer = () => (
    <StyledFooter>
        <Input />
        <Button isPlain={false} />
    </StyledFooter>
);

/*
    Footer Styles
*/
const StyledFooter = styled.footer`
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

export default Footer;
