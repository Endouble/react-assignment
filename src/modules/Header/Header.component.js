import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button/Button.component';

// import { colors } from '../../styles/vars';

const Header = () => (
    <StyledHeader>
        <div className="pokeHeader__flash">
            <Button className="daniel" />
        </div>
    </StyledHeader>
);

/*
    Header Styles
*/
const StyledHeader = styled.header`
    .pokeHeader__flash {

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
