import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { sizes } from '../../styles/vars';

const Layout = ({ children }) => (
    <StyledLayout>
        {children}
    </StyledLayout>
);

/*
    Layout Styles
*/
const StyledLayout = styled.div`
    max-width: ${sizes.desktop};
    margin: 0 auto;
`;

/*
    Layout propTypes
*/
Layout.propTypes = {
    children: PropTypes.node,
};
Layout.defaultProps = {
    children: null,
};

export default Layout;
