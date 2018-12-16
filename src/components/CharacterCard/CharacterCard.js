import React from 'react';
import PropTypes from 'prop-types';

import { Card, Button } from 'semantic-ui-react';

const CharacterCard = (props) => {
    const { character } = props;
    const showCharacterDetails = () => props.showCharacterModal(character);
    return (
        <Card fluid tabIndex='0' onKeyPress={showCharacterDetails}>
            <Card.Content>
                <Card.Header>
                    { character.name }
                </Card.Header>
            </Card.Content>
            <Card.Content extra>
                <Button onClick={showCharacterDetails} role="link" tabIndex="0"> View More </Button>
            </Card.Content>
        </Card>
    );
};

CharacterCard.propTypes = {
    character: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
    showCharacterModal: PropTypes.func.isRequired,
};

export default CharacterCard;
