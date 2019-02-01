import React, { Component } from 'react';

// components
import Grid from './components/Grid';
import FilterForm from './components/FilterForm';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchString: '',
        };

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(string) {
        this.setState({
            searchString: string,
        });
    }

    render() {
        const { searchString } = this.state;
        return (
            <div className="App">
                <FilterForm handleSearch={this.handleSearch} />
                <Grid searchText={searchString} />
            </div>
        );
    }
}

export default App;
