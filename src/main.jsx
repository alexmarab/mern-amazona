import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { StoreProvider } from './context/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StoreProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StoreProvider>
  </React.StrictMode>
);
