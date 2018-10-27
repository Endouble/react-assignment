import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PokeDex = ({ cards }) => (
    <StyledPokeDex>
        {cards.map(c => <li key={c.id}>{c.name}</li>)}
    </StyledPokeDex>
);

/*
    PokeDex Styles
*/
const StyledPokeDex = styled.ul`
`;

/*
    PokeDex propTypes
*/
PokeDex.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape()),
};
PokeDex.defaultProps = {
    cards: [],
};

export default PokeDex;
