import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors, sizes } from '../../styles/vars';

const PokeDex = ({ cards }) => (
    <StyledPokeDex>
        <ul className="pokeDex__list">
            {cards.map(c => (
                <StyledList key={c.id}>
                    <p>{c.name}</p>
                    <img className="pokeDex__img" alt={c.name} src={c.imageUrl} />
                </StyledList>
            ))}
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

const StyledList = styled.li`
    padding: 10px;
    text-align: center;

    .pokeDex__img {
        width: 100%;
    }

    @media (min-width: ${sizes.tablet}) {
        width: 25%;
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
