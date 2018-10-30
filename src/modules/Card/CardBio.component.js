import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from './Card.component';

const CardBio = (props) => {
    const { hp, attacks, weaknesses } = props;
    const bioInfo = (
        <div>
            <p>HP: {hp}</p>
            <p>Attacks: {attacks.map(a => ` - ${a.name}`)} </p>
            <p>Weaknesses: {weaknesses.map(w => w.type)} </p>
        </div>
    );
    return (
        <StyledCardBio>
            <Card {...props} bioInfo={bioInfo} className="pokeBio" clickHandler={null} />
        </StyledCardBio>
    );
};

/*
    CardBio Styles
*/
const StyledCardBio = styled.div`
    padding-bottom: 30px;

    .pokeBio {
        font-size: 16px;
        line-height: 1.5;
        background: none;
        text-align: center;
    }

    .pokeCard__name {
        text-align: center;
    }

    .pokeCard__img, .pokeCard__img:hover {
        width: 70%;
        margin: 0 auto;
        transition: none;
    }

`;

/*
    CardBio propTypes
*/
CardBio.propTypes = {
    hp: PropTypes.string,
    attacks: PropTypes.arrayOf(PropTypes.shape({})),
    weaknesses: PropTypes.arrayOf(PropTypes.shape({})),
};
CardBio.defaultProps = {
    hp: '',
    attacks: [],
    weaknesses: [],
};

export default CardBio;
