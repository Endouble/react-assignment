import React from 'react';
import PropTypes from 'prop-types';

import PokeDex from './PokeDex.component';
import { CardsContext, FilterContext } from '../../context';

import getPokemons from '../../api/pokemon';

class PokeDexContext extends React.Component {
    constructor(props) {
        super(props);
        this.filteredCards = this.filteredCards.bind(this);
    }

    componentDidMount() {
        const { toggleIsLoading, setCards } = this.props;
        toggleIsLoading(true);
        getPokemons()
            .then((data) => {
                if (data && data.cards) {
                    setCards(data.cards);
                    toggleIsLoading(false);
                }
            });
    }

    filteredCards(filter, cards) {
        const updatedCards = filter.value !== '' ? cards
            .filter(card =>
                card[filter.filterBy].toLowerCase()
                    .includes(filter.value.toLowerCase())) :
            cards;
        return <PokeDex clickHandler={this.props.setCurrentCard} cards={updatedCards} />;
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

/*
    PokeDexContext propTypes
*/
PokeDexContext.propTypes = {
    setCards: PropTypes.func,
    setCurrentCard: PropTypes.func,
    toggleIsLoading: PropTypes.func,
};

PokeDexContext.defaultProps = {
    setCards: () => null,
    setCurrentCard: () => null,
    toggleIsLoading: () => null,
};

export default PokeDexContext;
