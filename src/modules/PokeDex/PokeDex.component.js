import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from '../Card';

import { colors, sizes } from '../../styles/vars';

const PokeDex = ({ cards, clickHandler }) => (
    <StyledPokeDex>
        <ul className="pokeDex__list">
            {cards.length ? cards.map(c =>
                <li key={c.id}><Card clickHandler={clickHandler} {...c} /></li>)
                : <li className="pokeDex__list--no">No results</li>
            }
        </ul>
    </StyledPokeDex>
);

/*
    PokeDex Styles
*/
const StyledPokeDex = styled.div`
    background: ${colors.magenta};
    padding: 0 30px 50px;

    .pokeDex__list {
        min-height: calc( 100vh - 240px );
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

    li.pokeDex__list--no {
        color: white;
        font-size: 25px;
        margin-top: 15px;
    }
`;

/*
    PokeDex propTypes
*/
PokeDex.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape()),
    clickHandler: PropTypes.func,
};
PokeDex.defaultProps = {
    cards: [],
    clickHandler: () => null,
};

export default PokeDex;
