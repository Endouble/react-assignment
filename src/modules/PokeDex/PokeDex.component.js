import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from '../Card';
import Button from '../Button';

import { colors, sizes } from '../../styles/vars';

const PokeDex = ({ cards, clickHandler, hasError, errorHandler }) => {
    const noResults = hasError ? (
        <li className="pokeDex__list--no">
            <p>Data request error</p>
            <Button onClick={errorHandler} backColor={colors.blue} isPlain={false} />
            <span>Request again</span>
        </li>) :
        <li className="pokeDex__list--no">No results</li>;
    return (
        <StyledPokeDex hasError={hasError}>
            <ul className="pokeDex__list">
                {cards.length ? cards.map(c =>
                    <li key={c.id}><Card clickHandler={clickHandler} {...c} /></li>)
                    : noResults
                }
            </ul>
        </StyledPokeDex>
    );
};

/*
    PokeDex Styles
*/
const StyledPokeDex = styled.div`
    background: ${({ hasError }) => (hasError ? colors.blue : colors.magenta)};
    padding: 0 30px 50px;

    .pokeDex__list {
        min-height: calc( 100vh - 170px );
        padding: 0 20px;
        display: flex;
        margin: 0;
        flex-wrap: wrap;
        background: ${({ hasError }) => (hasError ? colors.red : colors.blue)};
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
        margin-top: 15px;
        text-align: center;

        .pokeButton {
            margin: 0 auto 10px;
        }

        p {
            font-size: 25px;
        }
    }
`;

/*
    PokeDex propTypes
*/
PokeDex.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape()),
    clickHandler: PropTypes.func,
    errorHandler: PropTypes.func,
    hasError: PropTypes.bool,
};
PokeDex.defaultProps = {
    cards: [],
    clickHandler: () => null,
    errorHandler: () => null,
    hasError: false,
};

export default PokeDex;
