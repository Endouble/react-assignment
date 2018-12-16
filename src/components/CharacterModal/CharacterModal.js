import React from 'react';

import { Modal } from 'semantic-ui-react';

const CharacterModal = (props) => {
  return <Modal open closeIcon onClose={props.onCloseCallback}>
    <Modal.Header>
      {props.character.name}
    </Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <p id="gender">Gender: {props.character.gender}</p>
        <p id="eyes">Eye color: {props.character.eye_color}</p>
        <p id="height">Height: {props.character.height}</p>
        <p id="mass">Mass: {props.character.mass}</p>
        <p id="skin">Skin color: {props.character.skin_color}</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
};



export default CharacterModal;