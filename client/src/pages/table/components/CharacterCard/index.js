import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

class CharacterCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false,
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() { this.setState({ modalIsOpen: true }); }

    afterOpenModal() { this.subtitle.style.color = '#a7cd68'; }

    closeModal() { this.setState({ modalIsOpen: false }); }

    render() {
        const {
            image,
            name,
            species,
            status,
            location,
            origin,
            episode,
        } = this.props.data;

        return (
            <div className="character__details">
                <img className="character__details--image" src={image} alt={name} title={name} />
                <h3 className="character__title">{name}</h3>
                <button className="modal__button" onClick={this.openModal}>View details</button>
                <React.Fragment>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel={name}
                    >
                        <div className="modal">
                            <h2 className="modal__title" ref={(subtitle) => { this.subtitle = subtitle; }}>{name}</h2>
                            <img className="modal__image" src={image} alt={name} title={name} />
                            <ul className="modal__list">
                                <li>Specie: {species}</li>
                                <li>Status: {status}</li>
                                <li>Location: {location.name}</li>
                                <li>Origin: {origin.name}</li>
                                <li>Appearances: {episode.length}</li>
                            </ul>
                        </div>
                        <button className="modal__button" onClick={this.closeModal}>close</button>
                    </Modal>
                </React.Fragment>
            </div>
        );
    }
}

CharacterCard.propTypes = {
    data: PropTypes.instanceOf(Object),
    name: PropTypes.string,
    species: PropTypes.string,
    status: PropTypes.string,
    location: PropTypes.string,
    origin: PropTypes.string,
    episode: PropTypes.instanceOf(Array),
};

CharacterCard.defaultProps = {
    data: {},
    name: 'john',
    species: 'human',
    status: 'alive',
    location: 'earth',
    origin: 'alien spa',
    episode: [],
};

export default CharacterCard;
