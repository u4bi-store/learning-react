import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import store from './providers/Store';

ReactDOM.render(
    <Provider store={ store }>
        <App name='u4bi' />
    </Provider>
    , document.getElementById('root')
);
registerServiceWorker();
