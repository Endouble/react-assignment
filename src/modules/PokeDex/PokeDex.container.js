/* eslint-disable */
import React from 'react';

import PokeDex from './PokeDex.component';
import { CardsContext } from '../../pages/Home';

import getPokemons from '../../api/pokemon';

class PokeDexData extends React.Component {
    componentDidMount() {
        getPokemons()
            .then((data) => {
                this.props.setCards(data.cards)
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

export default PokeDexData;
