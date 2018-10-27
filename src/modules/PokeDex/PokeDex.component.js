import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PokeDex = ({ pokemons }) => (
    <StyledPokeDex>
        {pokemons[0]}
    </StyledPokeDex>
);

/*
    PokeDex Styles
*/
const StyledPokeDex = styled.section`
`;

/*
    PokeDex propTypes
*/
PokeDex.propTypes = {
    pokemons: PropTypes.arrayOf(PropTypes.shape()),
};
PokeDex.defaultProps = {
    pokemons: [],
};

export default PokeDex;
