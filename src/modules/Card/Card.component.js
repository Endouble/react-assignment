import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = (props) => {
    const setCurrentCard = () => {
        props.clickHandler(props);
    };
    const { name, imageUrl, types, number, artist } = props;
    return (
        <StyledCard onClick={setCurrentCard}>
            <p className="pokeCard__name">{number && `${number} - `} {name}</p>
            <img className="pokeCard__img" alt={name} src={imageUrl} />
            <footer className="pokeCard__foot">
                <p>Types: {types.map(t => t)}</p>
                <p>Artist: {artist}</p>
            </footer>
        </StyledCard>
    );
};

/*
    Card Styles
*/
const StyledCard = styled.article`
    padding: 10px;
    text-align: center;
    cursor: pointer;

    .pokeCard__name {
        margin: 5px;
        font-size: 20px;
        text-align: left;
        font-weight: bold;
    }

    .pokeCard__foot {
        background: #000850;
        color: white;
        font-size: 12px;
        margin: 0;
        padding: 10px;
        text-align: left;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;

        p {
            margin: 0 0 3px 0;
        }
    }

    .pokeCard__img {
        width: 100%;
        display: flex;
        background: #000850;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        min-height: 200px;
    }
`;

/*
    Card propTypes
*/
Card.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    artist: PropTypes.string,
    imageUrl: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.string),
    clickHandler: PropTypes.func,
};
Card.defaultProps = {
    name: '',
    number: '',
    artist: '',
    imageUrl: '',
    types: [],
    clickHandler: () => null,
};

export default Card;
