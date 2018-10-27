import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { sizes } from '../../styles/vars';

import Header from '../../modules/Header';
import Footer from '../../modules/Footer';

const Layout = ({ children }) => (
    <StyledLayout>
        <Header />
        {children}
        <Footer />
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
