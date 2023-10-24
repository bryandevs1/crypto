import '@sass/index.scss';

import { ApolloProvider } from '@apollo/client';
import App from '@components/App';
import React from 'react';
import ReactDOM from 'react-dom/client';

import client from './apollo'; // Import the Apollo Client instance

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
);
