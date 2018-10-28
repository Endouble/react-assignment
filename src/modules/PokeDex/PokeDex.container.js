/* eslint-disable class-methods-use-this */

import React from 'react';
import PropTypes from 'prop-types';
import PokeDex from './PokeDex.component';
import { CardsContext } from '../../pages/Home/Home.component';

import getPokemons from '../../api/pokemon';

class PokeDexData extends React.Component {
    componentDidMount() {
        getPokemons()
            .then((data) => {
                if (data && data.length) {
                    this.props.setCards(data.cards);
                }
            });
    }

    render() {
        return (
            <CardsContext.Consumer>
                {cards => (<PokeDex cards={cards} />)}
            </CardsContext.Consumer>
        );
    }
}

PokeDexData.propTypes = {
    setCards: PropTypes.func,
};

PokeDexData.defaultProps = {
    setCards: null,
};

export default PokeDexData;
