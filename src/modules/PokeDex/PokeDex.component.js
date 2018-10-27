import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from '../Card';

import { colors, sizes } from '../../styles/vars';

const PokeDex = ({ cards }) => (
    <StyledPokeDex>
        <ul className="pokeDex__list">
            {cards.map(c => <li key={c.id}><Card {...c} /></li>)}
        </ul>
    </StyledPokeDex>
);

/*
    PokeDex Styles
*/
const StyledPokeDex = styled.div`
    background: ${colors.magenta};
    padding: 0 30px 80px;

    .pokeDex__list {
        padding: 0 20px;
        display: flex;
        margin: 0;
        flex-wrap: wrap;
        background: ${colors.blue};
        border-left: 10px solid ${colors.darkPurple};
        border-right: 10px solid ${colors.darkPurple};

        li {
            margin: 0 auto;

            @media (min-width: ${sizes.tablet}) {
                width: 25%;
            }
        }
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
