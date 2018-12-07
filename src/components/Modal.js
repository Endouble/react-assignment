import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import '../styles/missionModal.css';

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
    el = document.createElement('div')

    componentDidMount() {
        modalRoot.appendChild(this.el);
        this.addScrollLock();
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
        this.removeScrollLock();
    }

    onEscape = ({ keyCode }) => {
        const { onClose } = this.props;
        if (keyCode === 27) onClose();
    }

    addScrollLock = () => document.querySelector('html').classList.add('u-lock-scroll')

    removeScrollLock = () => document.querySelector('html').classList.remove('u-lock-scroll')

    render() {
        const { onClose, children, role, ariaLabel, closeButtonRef } = this.props;
        return ReactDOM.createPortal(
            <aside
                role={role}
                aria-label={ariaLabel}
                aria-modal="true"
                tabIndex="-1"
                // onKeyDown={this.onEscape}
                // onKeyPress={() => {}}
                // onClick={onClickAway}
                // onKeyDown={() => {}}
                style={{
                    position: 'absolute',
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    display: 'grid',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    zIndex: 1000,
                }}
            >
                <div
                    style={{
                        padding: 20,
                        background: '#fff',
                        borderRadius: '2px',
                        display: 'inline-block',
                        minHeight: '300px',
                        margin: '1rem',
                        position: 'relative',
                        minWidth: '300px',
                        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
                        justifySelf: 'center',
                    }}
                >
                    {children}
                    <button
                        type="button"
                        className="mission__modal_close"
                        aria-label="Close Modal"
                        onClick={onClose}
                        ref={closeButtonRef}
                    >
                        <span className="u-hide-visually">Close</span>
                        <svg className="mission__modal_close-icon" viewBox="0 0 40 40">
                            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
                        </svg>
                    </button>
                </div>
            </aside>,
            this.el,
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    role: PropTypes.string,
    ariaLabel: PropTypes.string.isRequired,
    closeButtonRef: PropTypes.func.isRequired,
};

Modal.defaultProps = {
    role: 'dialog',
};

export default Modal;
