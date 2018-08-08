import React from 'react';
import PropTypes from 'prop-types';
import './HeaderComponent.css';

// The header of our app, static content, only the logo may change

const HeaderComponent = (props) => {
    const { logo } = props;
    return (
        <React.Fragment>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to Breaking Bad Quotes App</h1>
            </header>
            <p className="App-intro">
                These are our quotes for today, can you guess who said them? Select a card and find it!
            </p>
        </React.Fragment>
    );
};

HeaderComponent.propTypes = {
    logo: PropTypes.string,
};

HeaderComponent.defaultProps = {
    logo: '',
};

export default HeaderComponent;

