import React from 'react';
import PropTypes from 'prop-types';

import PokeDex from './PokeDex.component';
import { CardsContext, FilterContext } from '../../pages/Home/Home.component';

import getPokemons from '../../api/pokemon';

class PokeDexContext extends React.Component {
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
        const updatedCards = filter.value !== '' ? cards.filter(c => c[filter.filterBy].toLowerCase().includes(filter.value)) : cards;
        return <PokeDex clickHandler={this.setCurrentCard} cards={updatedCards} />;
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

PokeDexContext.propTypes = {
    setCards: PropTypes.func,
};

PokeDexContext.defaultProps = {
    setCards: () => null,
};

export default PokeDexContext;
