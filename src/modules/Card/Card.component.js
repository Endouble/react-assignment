import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = (props) => {
    const noLink = (ev) => {
        ev.preventDefault();
        if (props.clickHandler) {
            props.clickHandler(props);
        }
    };
    const { name, imageUrl, set, number, artist, bioInfo, className } = props;
    const footStyles = `pokeCard__foot ${className && className}`;
    return (
        <StyledCard>
            <a className="pokeCard__item" href="/" onClick={noLink}>
                <h3 className="pokeCard__name">{number && `${number} - `} {name}</h3>
                <img className="pokeCard__img" alt={name} src={imageUrl} />
                <footer className={footStyles}>
                    <p>Set: {set}</p>
                    <p>Artist: {artist}</p>
                    {bioInfo && bioInfo}
                </footer>
            </a>
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

    .pokeCard__item {
        text-decoration: none;
        color: inherit;
    }

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
        margin-top: 0;
        transition: margin 0.25s ease;
    }

    &:hover, &:focus, &:active {
        .pokeCard__img {
            margin-top: -5px;
        }
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
    set: PropTypes.string,
    clickHandler: PropTypes.func,
    bioInfo: PropTypes.node,
    className: PropTypes.string,
};
Card.defaultProps = {
    name: '',
    number: '',
    artist: '',
    imageUrl: '',
    set: '',
    clickHandler: () => null,
    bioInfo: null,
    className: '',
};

export default Card;
