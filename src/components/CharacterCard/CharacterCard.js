import React from 'react';

import { Card } from 'semantic-ui-react';

const CharacterCard = (props) => {
  return <Card fluid link>
    <Card.Content>
      <Card.Header>
        { props.character.name }
      </Card.Header>
      <Card.Description>
        { props.character.info }
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <p> View More </p>
    </Card.Content>
  </Card>
};

export default CharacterCard;