import React from 'react';
import PropTypes from 'prop-types';
import './QuoteComponent.css';

// Individual cards with a single quote on it

const QuoteComponent = (props) => {
    const { quote, openModal, index } = props;
    return (
        <div
            className='card'
            role='button'
            tabIndex='0'
            onKeyDown={(e) => {
                // Since our App is accessible by keyboard,
                // We're only going to open the modal when the Return/enter key is given
                if (e.keyCode === 13) return openModal(index);
                return false;
            }}
            onClick={() => openModal(index)}
        >
            <div className='container'>
                <h4>{quote}</h4>
            </div>
        </div>
    );
};

QuoteComponent.propTypes = {
    quote: PropTypes.string,
    index: PropTypes.number,
    openModal: PropTypes.func.isRequired,
};

QuoteComponent.defaultProps = {
    quote: '',
    index: 0,
};

export default QuoteComponent;
