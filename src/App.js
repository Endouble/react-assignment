import React, { Component } from 'react';
import hash from 'object-hash';
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';
import LoadingComponent from './components/LoadingComponent';
import QuoteComponent from './components/QuoteComponent';


const API_PATH = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes/';
const QUOTES_CHUNK_SIZE = '16';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            originalFetchedData: [],
            liveData: [],
            query: '',
            isModalOpen: false,
            openedQuote: {},
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        this.setState({ loading: true }); // eslint-disable-line react/no-did-mount-set-state
        fetch(API_PATH + QUOTES_CHUNK_SIZE) // eslint-disable-line no-undef
            .then(response => response.json())
            .then(data => this.setState({ liveData: data, originalFetchedData: data, loading: false }));
    }

    openModal(index) {
        const { liveData } = this.state;
        this.setState({ isModalOpen: true, openedQuote: liveData[index] });
    }

    closeModal() {
        this.setState({ isModalOpen: false, openedQuote: {} });
    }

    handleSearch(query) {
        const { originalFetchedData } = this.state;

        if (query) {
            const filteredData =
                originalFetchedData.filter(item => item.quote.toUpperCase().includes(query.toUpperCase()));
            return this.setState({ liveData: filteredData, query });
        }

        return this.setState({ query, liveData: originalFetchedData });
    }

    handleSearchClean() {
        this.handleSearch('');
    }

    render() {
        const { liveData, loading, query, isModalOpen, openedQuote } = this.state;

        if (loading) return <LoadingComponent />;

        return (
            <div className="App container">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to Breaking Bad Quotes App</h1>
                </header>
                <p className="App-intro">
          These are our quotes for today, can you guess who wrote them? if not click a card!
                </p>
                <div className='form-group row'>
                    <input
                        value={query}
                        placeholder='Search'
                        onChange={e => this.handleSearch(e.target.value)}
                        className='col-6 form-control-plaintext'
                    />
                    {query && (
                        <button
                            onClick={() => this.handleSearchClean()}
                            className='col-3 btn btn-primary resetButton'
                        >
                            <span>Reset</span>
                        </button>
                    )}
                </div>
                <div className='row'>
                    {liveData.map((quote, index) => {
                        const { quote: rawQuote } = quote;
                        return (
                            <div key={hash(index)} className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3'>
                                <QuoteComponent
                                    quote={rawQuote}
                                    key={hash(quote)}
                                    openModal={this.openModal}
                                    isModalOpen={isModalOpen}
                                    index={index}
                                />
                            </div>
                        );
                    })}
                </div>
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={this.closeModal}
                    shouldCloseOnOverlayClick
                    ariaHideApp={false}
                >
                    <div>WRITTEN BY: {openedQuote.author}</div>
                </Modal>
            </div>
        );
    }
}

export default App;
