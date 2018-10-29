/* global document */

import React from 'react';
import PropTypes from 'prop-types';

import PokeDexContext from './PokeDex.context';
import Modal from '../Modal';
import CardBio from '../Card/CardBio.component';

class PokeDexData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCard: {},
            isModalOpen: false,
        };
        this.setCurrentCard = this.setCurrentCard.bind(this);
        this.hideModal = this.hideModal.bind(this);
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

    render() {
        const { isModalOpen, currentCard } = this.state;
        return (
            <div>
                <PokeDexContext
                    setCurrentCard={this.setCurrentCard}
                    setCards={this.props.setCards}
                    toggleIsLoading={this.props.toggleIsLoading}
                />
                <Modal isOpen={isModalOpen} hideModal={this.hideModal}>
                    <CardBio {...currentCard} />
                </Modal>
            </div>
        );
    }
}

/*
    PokeDexData propTypes
*/
PokeDexData.propTypes = {
    setCards: PropTypes.func,
    toggleIsLoading: PropTypes.func,
};

PokeDexData.defaultProps = {
    setCards: () => null,
    toggleIsLoading: () => null,
};

export default PokeDexData;
