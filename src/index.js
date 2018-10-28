/* global document */

import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

import Home from './pages/Home';
import registerServiceWorker from './registerServiceWorker';

import { globalStyles } from './styles/mixins';

const GlobalStyle = createGlobalStyle`
    ${globalStyles}
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
