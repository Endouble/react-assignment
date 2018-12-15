import React from 'react';

import { Card } from 'semantic-ui-react';

const CharacterCard = (props) => {
  const showCharacterDetails = () => props.showCharacterModal(props.character);

  return <Card fluid>
    <Card.Content>
      <Card.Header>
        { props.character.name }
      </Card.Header>
      <Card.Description>
        { props.character.info }
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a onClick={showCharacterDetails}> View More </a>
    </Card.Content>
  </Card>
};

export default CharacterCard;