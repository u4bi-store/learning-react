import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'http://127.0.0.1:7778/graphql'
    }),
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={ client }>
        <App />
    </ApolloProvider>
    , document.getElementById('root')
);
registerServiceWorker();
