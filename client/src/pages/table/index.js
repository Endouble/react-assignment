import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/table.css';

import SearchFilter from './components/SearchFilter/';

import loadingImage from './assets/loading.gif';

class TableView extends Component {
    checkData() {
        if (this.props.data !== null) {
            return (
                <section><SearchFilter data={this.props.data.results} /></section>
            );
        }
        return (<img className="loading" src={loadingImage} alt="Loading data" />);
    }

    render() {
        return (
            <div>
                {this.checkData()}
            </div>
        );
    }
}

TableView.propTypes = {
    data: PropTypes.instanceOf(Object),
};

TableView.defaultProps = {
    data: {},
};

export default TableView;
