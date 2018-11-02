import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from './Card.component';

const CardBio = (props) => {
    const { hp, attacks, weaknesses } = props;
    const bioInfo = (
        <div>
            {hp && <p>HP: {hp}</p>}
            {attacks.length && <p>Attacks: {attacks.map(attack => ` - ${attack.name}`)} </p>}
            {weaknesses.length && <p>Weaknesses: {weaknesses.map(weak => weak.type)} </p>}
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

        .pokeCard__foot {
            font-size: 16px;
            line-height: 1.5;
            background: none;
            text-align: center;
        }

        &:hover, &:focus, &:active {
            .pokeCard__img {
                margin-top: 0;
            }
        }

    }

    .pokeCard__name {
        text-align: center;
    }

    .pokeCard__img {
        width: 70%;
        margin: 0 auto;
        margin-top: 0;
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
