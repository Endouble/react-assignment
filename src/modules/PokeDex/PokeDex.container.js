/* eslint-disable class-methods-use-this */

import React from 'react';
import PropTypes from 'prop-types';

import PokeDex from './PokeDex.component';

import { CardsContext, FilterContext } from '../../pages/Home/Home.component';

import getPokemons from '../../api/pokemon';

class PokeDexData extends React.Component {
    constructor(props) {
        super(props);
        this.filteredCards = this.filteredCards.bind(this);
    }

    componentDidMount() {
        getPokemons()
            .then((data) => {
                if (data && data.cards) {
                    this.props.setCards(data.cards);
                }
            });
    }

    filteredCards(filter, cards) {
        const updatedCards = filter.value !== '' ? cards.filter(c => c.name.toLowerCase().includes(filter.value)) : cards;
        return <PokeDex cards={updatedCards} />;
    }

    render() {
        return (
            <FilterContext.Consumer>
                {filter => (
                    <CardsContext.Consumer>
                        {cards => this.filteredCards(filter, cards)}
                    </CardsContext.Consumer>
                )}
            </FilterContext.Consumer>
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
