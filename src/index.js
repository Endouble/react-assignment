/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

import Home from './pages/Home';
import registerServiceWorker from './registerServiceWorker';

const GlobalStyle = createGlobalStyle`
    ul, ol {
        list-style: none;
        padding: 0;
    }
    * {
        font-family: 'Roboto';
        box-sizing: border-box;
    }
    .body--frozen {
        overflow: hidden;
    }

    #root {
        max-width: 1200px;
        margin: 0 auto;
    }
`;

const NormalizedApp = () => (
    <React.Fragment>
        <Normalize />
        <GlobalStyle />
        <Home />
    </React.Fragment>
);

ReactDOM.render(<NormalizedApp />, document.getElementById('root'));

registerServiceWorker();
