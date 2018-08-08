import React from 'react';
import PropTypes from 'prop-types';
import hash from 'object-hash';
import Modal from 'react-modal';
import QuoteComponent from '../QuoteComponent';

// Will render multiple quotes

const QuoteListComponent = (props) => {
    const { items, openModal, closeModal, isModalOpen, openedQuote } = props;

    return (
        <React.Fragment>
            <div className='row'>
                {items.map((quote, index) => {
                    const { quote: rawQuote } = quote;
                    return (
                        <div key={hash(index)} className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3'>
                            <QuoteComponent
                                quote={rawQuote}
                                key={hash(quote)} // Do not use raw index as key, instead create a hash
                                openModal={openModal} // We could have created a context provider and access it
                                isModalOpen={isModalOpen} // directly on the QuoteComponent
                                index={index} // This isnot being used as a key, just to mark what card was selected
                            />
                        </div>
                    );
                })}
            </div>
            <Modal // This is the modal that will be displayed when a card is selected
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                shouldCloseOnOverlayClick
                ariaHideApp={false}
            >
                <div>Said by: {openedQuote.author}</div>
            </Modal>
        </React.Fragment>
    );
};

QuoteListComponent.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    isModalOpen: PropTypes.bool,
    openedQuote: PropTypes.shape({
        quote: PropTypes.string,
        author: PropTypes.string,
    }),
    openModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
};

QuoteListComponent.defaultProps = {
    items: [],
    isModalOpen: false,
    openedQuote: {},
};

export default QuoteListComponent;
