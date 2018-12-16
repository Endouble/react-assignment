import React from 'react';
import PropTypes from 'prop-types';

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

CharacterModal.protoTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    eye_color: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    mass: PropTypes.string.isRequired,
    skin: PropTypes.string.isRequired
  }).isRequired,
  onCloseCallback: PropTypes.func.isRequired
} 


export default CharacterModal;