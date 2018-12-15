import React from 'react';

import { Modal } from 'semantic-ui-react';

const CharacterModal = (props) => {
  return <Modal open closeIcon onClose={props.onCloseCallback}>
    <Modal.Header>
      {props.character.name}
    </Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <p>Gender: {props.character.gender}</p>
        <p>Eye color: {props.character.eye_color}</p>
        <p>Height: {props.character.height}</p>
        <p>Mass: {props.character.mass}</p>
        <p>Skin color: {props.character.skin_color}</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
};

export default CharacterModal;