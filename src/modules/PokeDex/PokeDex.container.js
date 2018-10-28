/* global document */

import React from 'react';
import PropTypes from 'prop-types';

import PokeDex from './PokeDex.component';
import Modal from '../Modal';
import CardBio from '../Card/CardBio.component';

import { CardsContext, FilterContext } from '../../pages/Home/Home.component';

import getPokemons from '../../api/pokemon';

class PokeDexData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCard: {},
            isModalOpen: false,
        };
        this.filteredCards = this.filteredCards.bind(this);
        this.setCurrentCard = this.setCurrentCard.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    componentDidMount() {
        getPokemons()
            .then((data) => {
                if (data && data.cards) {
                    this.props.setCards(data.cards);
                }
            });
    }

    componentDidUpdate(prevProps, prevState) {
        const { isModalOpen } = this.state;
        if (isModalOpen !== prevState.isModalOpen) {
            const body = document.querySelector('body');
            body.classList.toggle('body--frozen');
        }
    }

    setCurrentCard(currentCard) {
        this.setState({
            currentCard,
            isModalOpen: true,
        });
    }

    hideModal() {
        this.setState({ isModalOpen: false });
    }

    filteredCards(filter, cards) {
        console.log('filter ----> debug');
        console.log(filter);
        const updatedCards = filter.value !== '' ? cards.filter(c => c[filter.filterBy].toLowerCase().includes(filter.value)) : cards;
        return <PokeDex clickHandler={this.setCurrentCard} cards={updatedCards} />;
    }

    render() {
        const { isModalOpen, currentCard } = this.state;
        return (
            <div>
                <FilterContext.Consumer>
                    {filter => (
                        <CardsContext.Consumer>
                            {cards => this.filteredCards(filter, cards)}
                        </CardsContext.Consumer>
                    )}
                </FilterContext.Consumer>
                <Modal isOpen={isModalOpen} hideModal={this.hideModal}>
                    <CardBio {...currentCard} />
                </Modal>
            </div>
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
