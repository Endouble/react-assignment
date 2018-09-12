import { Component } from 'react';
import ReactDOM from 'react-dom';

/* eslint-env browser */
/* eslint-disable */
class ModalContainer extends Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        const modalRoot = document.getElementById('modal-root');
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        const modalRoot = document.getElementById('modal-root');
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }
}

export default ModalContainer;
