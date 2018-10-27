import React from 'react';

import PokeDex from './PokeDex.component';

import getPokemons from '../../api/pokemon';

class PokeDexData extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [],
        };
    }

    componentDidMount() {
        getPokemons()
            .then((data) => {
                this.setState({
                    cards: data.cards,
                });
            });
    }

    render() {
        const { cards } = this.state;
        return <PokeDex cards={cards} />;
    }
}

export default PokeDexData;
