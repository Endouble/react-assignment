import React from 'react';
import ReactDOM from 'react-dom';
import './styles/core.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root')); // eslint-disable-line
registerServiceWorker();
