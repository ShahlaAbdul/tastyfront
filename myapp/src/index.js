import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import SearchProvider from './context/useSearchContext';
import WishlistProvider from './context/WishlistContext';
import BasketProvider from './context/BasketContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <HelmetProvider>
      <BasketProvider>

      <WishlistProvider>
      <SearchProvider>
    <App />
      </SearchProvider>
      </WishlistProvider>
      </BasketProvider>
     </HelmetProvider>
  </React.StrictMode>
);
