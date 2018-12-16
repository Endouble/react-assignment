import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'semantic-ui-react';

const CharacterCard = (props) => {
  const showCharacterDetails = () => props.showCharacterModal(props.character);

  return <Card fluid tabIndex='0' onKeyPress={showCharacterDetails}>
    <Card.Content>
      <Card.Header>
        { props.character.name }
      </Card.Header>
    </Card.Content>
    <Card.Content extra>
      <a onClick={showCharacterDetails}> View More </a>
    </Card.Content>
  </Card>
};

CharacterCard.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  showCharacterModal: PropTypes.func.isRequired
};

export default CharacterCard;