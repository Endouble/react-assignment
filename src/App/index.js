import React, { Component } from 'react';
import logo from './logo.svg';
import Modal from '../Modal';
import ModalContainer from '../ModalContainer';
import BreweryCard from '../BreweryCard';
import Brewery from '../Brewery';
import './App.scss';

/* eslint-env browser */
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            breweries: {},
            filterValue: '',
        };

        this.onBreweryClick = this.onBreweryClick.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
        this.onFilterSubmit = this.onFilterSubmit.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    componentDidMount() {
        /* eslint-disable react/no-did-mount-set-state */

        fetch('/breweries')
            .then(response => response.json())
            .then((arr) => {
                this.setState({
                    breweries: arr.reduce((memo, brewery) => ({
                        ...memo,
                        [brewery.id]: brewery,
                    }), {}),
                });
            });
    }

    onBreweryClick(evt, breweryId) {
        evt.preventDefault();
        this.showModal(breweryId);
    }

    onFilterChange(evt) {
        this.setState({
            filterValue: evt.target.value,
        });
    }

    onFilterSubmit(evt) {
        evt.preventDefault();

        fetch(`/breweries?by_city=${this.state.filterValue}`)
            .then(response => response.json())
            .then((arr) => {
                this.setState({
                    breweries: arr.reduce((memo, brewery) => ({
                        ...memo,
                        [brewery.id]: brewery,
                    }), {}),
                });
            });
    }

    hideModal() {
        this.setState({
            selectedBreweryId: undefined,
        });
    }

    showModal(breweryId) {
        this.setState({
            selectedBreweryId: breweryId,
        });
    }

    renderBreweries() {
        const { breweries } = this.state;

        if (!Object.keys(breweries).length) {
            return null;
        }

        return (
            <div className="App__breweries">
                {Object.values(breweries).map(this.renderBrewery, this)}
            </div>
        );
    }

    renderBrewery(brewery) {
        return (
            <div className="App__brewery-container" key={brewery.id}>
                <BreweryCard
                    onClick={this.onBreweryClick}
                    brewery={brewery}
                />
            </div>
        );
    }

    renderFiler() {
        return (
            <form onSubmit={this.onFilterSubmit} className="App__search-form">
                <label htmlFor="filter">
                    City name:
                    <input id="filter" type="text" value={this.state.filterValue} onChange={this.onFilterChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }

    renderModal() {
        const { selectedBreweryId } = this.state;
        if (!selectedBreweryId) {
            return null;
        }

        const selectedBrewery = this.state.breweries[selectedBreweryId];

        return (
            <ModalContainer>
                <Modal
                    onCloseClick={this.hideModal}
                >
                    <Brewery brewery={selectedBrewery} />
                </Modal>
            </ModalContainer>
        );
    }

    render() {
        return (
            <div className="App">
                <header className="App__header">
                    <img src={logo} className="App__logo" alt="logo" />
                    <h1 className="App__title">Welcome to React</h1>
                </header>
                <div className="App__body">
                    {this.renderFiler()}
                    {this.renderBreweries()}
                </div>
                {this.renderModal()}
            </div>
        );
    }
}

export default App;
