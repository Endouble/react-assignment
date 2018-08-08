import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import LoadingComponent from '../LoadingComponent';
import QuoteListComponent from '../QuoteListComponent';
import HeaderComponent from '../HeaderComponent';
import { API_PATH, QUOTES_CHUNK_SIZE } from '../../constants';

class App extends Component {
    constructor() {
        super();
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

    openModal(index) { // Will be used on the card component
        const { liveData } = this.state;
        this.setState({ isModalOpen: true, openedQuote: liveData[index] });
    }

    closeModal() { // Will be used on the card  list component
        this.setState({ isModalOpen: false, openedQuote: {} });
    }

    handleSearch(query) {
        const { originalFetchedData } = this.state;

        // We're searching inside the quote content, not by author for example
        if (query) {
            const filteredData =
                originalFetchedData.filter(item => item.quote.toUpperCase().includes(query.toUpperCase()));
            return this.setState({ liveData: filteredData, query });
        }

        // Cleaning the search
        return this.setState({ query, liveData: originalFetchedData });
    }

    render() {
        const { liveData, loading, query, isModalOpen, openedQuote } = this.state;

        if (loading) return <LoadingComponent />;

        return (
            <div className="App container">
                <HeaderComponent logo={logo} />
                <div className='row container'>
                    <input
                        value={query}
                        placeholder='Search..'
                        onChange={e => this.handleSearch(e.target.value)}
                        className='col-6 inputSearch'
                    />
                    {query && (
                        <button
                            onClick={() => this.handleSearch('')}
                            className='col-4 resetButton'
                        >
                            <span>Reset search</span>
                        </button>
                    )}
                </div>
                <QuoteListComponent
                    items={liveData}
                    isModalOpen={isModalOpen}
                    openedQuote={openedQuote}
                    openModal={this.openModal}
                    closeModal={this.closeModal}
                />
            </div>
        );
    }
}

export default App;
