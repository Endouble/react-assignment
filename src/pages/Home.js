import React from 'react';
// import PropTypes from 'prop-types';
import Layout from '../modules/Layout';
import PokeDex from '../modules/PokeDex';

export const CardsContext = React.createContext([]);

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cards: [] };
        this.setCards = this.setCards.bind(this);
    }
    setCards(cards) {
        this.setState({
            cards,
        });
    }

    render() {
        return (
            <CardsContext.Provider value={this.state.cards}>
                <Layout>
                    <PokeDex setCards={this.setCards} />
                </Layout>
            </CardsContext.Provider>
        );
    }
}

// CardsProvider.propTypes = {
//     children: PropTypes.node,
// };
//
// CardsProvider.defaultProps = {
//     children: null,
// };

// const Home = () => (
//     <CardsProvider>
//
//     </CardsProvider>
// );

export default Home;
