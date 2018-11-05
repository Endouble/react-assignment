import React from 'react';
import PropTypes from 'prop-types';
import includes from 'lodash.includes';


import PokeDex from './PokeDex.component';
import { CardsContext, FilterContext } from '../../context';

import getPokemons from '../../api/pokemon';

class PokeDexContext extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
        this.filteredCards = this.filteredCards.bind(this);
        this.dataRequest = this.dataRequest.bind(this);
    }

    componentDidMount() {
        this.dataRequest();
    }

    dataRequest() {
        const { toggleIsLoading, setCards } = this.props;
        toggleIsLoading(true);
        getPokemons()
            .then((data) => {
                if (data && data.cards) {
                    setCards(data.cards);
                    toggleIsLoading(false);
                }
            })
            .catch(() => {
                this.setState({
                    hasError: true,
                });
                toggleIsLoading(false);
            });
    }

    filteredCards(filter, cards) {
        const updatedCards = filter.value !== '' ? cards
            .filter(card => includes(card[filter.filterBy].toLowerCase(), filter.value.toLowerCase())) :
            cards;
        return <PokeDex clickHandler={this.props.setCurrentCard} cards={updatedCards} />;
    }

    render() {
        const { hasError } = this.state;

        return (
            <FilterContext.Consumer>
                {filter => (
                    <CardsContext.Consumer>
                        {cards => (hasError ?
                            <PokeDex hasError={hasError} errorHandler={this.dataRequest} /> :
                            this.filteredCards(filter, cards))
                        }
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
