import React from 'react';
import PropTypes from 'prop-types';

import { childrenWithProps } from '../../utils';

import Header from '../../modules/Header';
import Footer from '../../modules/Footer';
import PokeDex from '../../modules/PokeDex';

export const CardsContext = React.createContext([]);
export const FilterContext = React.createContext();

class ContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            filter: {
                value: '',
                filterBy: 'name',
            },
        };
        this.setCards = this.setCards.bind(this);
        this.setFilter = this.setFilter.bind(this);
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

    render() {
        const children = childrenWithProps(this.props.children, { setCards: this.setCards, setFilter: this.setFilter });
        return (
            <CardsContext.Provider value={this.state.cards}>
                <FilterContext.Provider value={this.state.filter}>
                    {children}
                </FilterContext.Provider>
            </CardsContext.Provider>
        );
    }
}

ContextProvider.propTypes = {
    children: PropTypes.node,
};

ContextProvider.defaultProps = {
    children: null,
};

const Home = () => (
    <ContextProvider>
        <Header />
        <PokeDex />
        <Footer />
    </ContextProvider>
);

export default Home;
