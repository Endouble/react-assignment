import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from '../Card';

import { colors } from '../../styles/vars';

const PokeDex = ({ cards }) => (
    <StyledPokeDex>
        <ul className="pokeDex__list">
            {cards.map(c => <Card key={c.id} {...c} />)}
        </ul>
    </StyledPokeDex>
);

/*
    PokeDex Styles
*/
const StyledPokeDex = styled.div`
    background: ${colors.magenta};
    padding: 0 30px;

    .pokeDex__list {
        padding: 0 20px;
        display: flex;
        margin: 0;
        flex-wrap: wrap;
        background: ${colors.blue};
        border-left: 10px solid ${colors.darkPurple};
        border-right: 10px solid ${colors.darkPurple};
    }
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
