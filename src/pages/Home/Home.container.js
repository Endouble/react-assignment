import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../modules/Header';
import Footer from '../../modules/Footer';
import PokeDex from '../../modules/PokeDex';

import { CardsContext, FilterContext, IsLoadingContext,
    defaultFilter, defaultCards, defaultIsLoading } from '../../context';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: defaultCards,
            filter: defaultFilter,
            isLoading: defaultIsLoading,
        };
        this.setCards = this.setCards.bind(this);
        this.setFilter = this.setFilter.bind(this);
        this.toggleIsLoading = this.toggleIsLoading.bind(this);
    }
    setCards(cards) {
        this.setState({
            cards,
        });
    }
    setFilter(filter) {
        this.setState({
            filter,
        });
    }
    toggleIsLoading(isLoading) {
        this.setState({
            isLoading,
        });
    }

    render() {
        const childrenProps = {
            setCards: this.setCards,
            setFilter: this.setFilter,
            toggleIsLoading: this.toggleIsLoading,
        };
        return (
            <CardsContext.Provider value={this.state.cards}>
                <FilterContext.Provider value={this.state.filter}>
                    <IsLoadingContext.Provider value={this.state.isLoading}>
                        <Header />
                        <PokeDex {...childrenProps} />
                        <Footer setFilter={this.setFilter} />
                    </IsLoadingContext.Provider>
                </FilterContext.Provider>
            </CardsContext.Provider>
        );
    }
}

Home.propTypes = {
    children: PropTypes.node,
};

Home.defaultProps = {
    children: null,
};

export default Home;
