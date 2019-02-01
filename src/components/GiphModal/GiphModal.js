import React from 'react';
import { Modal } from 'reactstrap';
import PropTypes from 'prop-types';

const GiphModal = (props) => {
    const { imageSrc, imageAlt, isOpened, toggle } = props;
    const externalCloseBtn = (
        <button
            type="button"
            className="close BtnCloseModal"
            onClick={toggle}
        >
            &times;
        </button>
    );
    return (
        <Modal
            external={externalCloseBtn}
            className="GiphModal"
            isOpen={isOpened}
            toggle={toggle}
        >
            <img
                src={imageSrc}
                alt={imageAlt}
            />
        </Modal>
    );
};

GiphModal.propTypes = {
    toggle: PropTypes.func.isRequired,
    imageSrc: PropTypes.string.isRequired,
    isOpened: PropTypes.bool,
    imageAlt: PropTypes.string,
};

GiphModal.defaultProps = {
    imageAlt: 'Giph',
    isOpened: false,
};

export default GiphModal;
