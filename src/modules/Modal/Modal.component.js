/* global document */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button';

import { colors, sizes } from '../../styles/vars';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.closeKeyBoard = this.closeKeyBoard.bind(this);
    }
    componentDidMount() {
        document.addEventListener('keydown', this.closeKeyBoard, false);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.closeKeyBoard, false);
    }

    closeKeyBoard(event) {
        const { hideModal } = this.props;
        // ESC keyCode
        if (event.keyCode === 27) {
            hideModal();
        }
    }

    render() {
        const { isOpen, children, hideModal } = this.props;
        return (
            <StyledModal isOpen={isOpen}>
                <div className="pokeModal__close">
                    <Button isPlain={false} onClick={hideModal} backColor={colors.red} />
                </div>
                <div className="pokeModal__shell">
                    {children}
                </div>
            </StyledModal>
        );
    }
}

/*
    Modal Styles
*/
const StyledModal = styled.div`
    background: ${colors.darkGray};
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;

    .pokeModal__close {
        position: absolute;
        top: 10px;
        right: 10px;

        @media (min-width: ${sizes.tablet}) {
            top: 30px;
            right: 30px;
        }
    }

    .pokeModal__shell {
        max-width: 90%;
        margin: 80px auto 0;
        color: white;
        overflow: auto;
        max-height: 100vh;
        z-index: 10;

        @media (min-width: ${sizes.mobile}) {
            max-width: 60%;
            padding-bottom: 100px;
        }

        @media (min-width: ${sizes.tablet}) {
            margin: 30px auto 0;
            max-width: 40%;
            padding-bottom: 100px;
        }
    }

`;

/*
    Modal propTypes
*/
Modal.propTypes = {
    children: PropTypes.node,
    isOpen: PropTypes.bool,
    hideModal: PropTypes.func,
};

Modal.defaultProps = {
    children: null,
    isOpen: false,
    hideModal: () => null,
};

export default Modal;
