import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'semantic-ui-react';

const CharacterModal = (props) => {
    const { onCloseCallback, character } = props;
    return (
        <Modal open closeIcon onClose={onCloseCallback}>
            <Modal.Header>
                {character.name}
            </Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <p id="gender">
                        Gender:
                        {character.gender}
                    </p>
                    <p id="eyes">
                        Eye color:
                        {character.eye_color}
                    </p>
                    <p id="height">
                        Height:
                        {character.height}
                    </p>
                    <p id="mass">
                        Mass:
                        {character.mass}
                    </p>
                    <p id="skin">
                        Skin color:
                        {character.skin_color}
                    </p>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    );
};

CharacterModal.propTypes = {
    character: PropTypes.shape({
        name: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        eye_color: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired,
        mass: PropTypes.string.isRequired,
        skin_color: PropTypes.string.isRequired,
    }).isRequired,
    onCloseCallback: PropTypes.func.isRequired,
};


export default CharacterModal;
