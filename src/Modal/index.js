import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Modal = props => (
    <div className="Modal">
        <div className="Modal__content">
            <button className="Modal__close-container" onClick={props.onCloseClick}>
                <svg className="Modal__close-icon" viewBox="0 0 40 40"><path d="M 10,10 L 30,30 M 30,10 L 10,30" /></svg>
            </button>
            <div className="Modal__body">
                {props.children}
            </div>
        </div>
    </div>
);

Modal.defaultProps = {
    onCloseClick: () => {},
    children: '',
};

Modal.propTypes = {
    onCloseClick: PropTypes.func,
    children: PropTypes.node,
};

export default Modal;
