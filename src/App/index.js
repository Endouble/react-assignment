import React, { Component } from 'react';
import logo from './logo.svg';
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

        alert(this.state.breweries[breweryId].name);
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

    renderBreweries() {
        const { breweries } = this.state;

        if (!Object.keys(breweries).length) {
            return null;
        }

        return (
            <React.Fragment>
                {Object.values(breweries).map(this.renderBrewery, this)}
            </React.Fragment>
        );
    }

    renderBrewery(brewery) {
        return (
            <div
                tabIndex={0}
                onClick={evt => this.onBreweryClick(evt, brewery.id)}
                onFocus={() => {}}
                onKeyDown={() => {}}
                key={brewery.id}
                role="button"
            >
                {brewery.name}
            </div>
        );
    }

    renderFiler() {
        return (
            <form onSubmit={this.onFilterSubmit}>
                <label htmlFor="filter">
                    City name:
                    <input id="filter" type="text" value={this.state.filterValue} onChange={this.onFilterChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div className="App-body">
                    {this.renderFiler()}
                    {this.renderBreweries()}
                </div>
            </div>
        );
    }
}

export default App;
