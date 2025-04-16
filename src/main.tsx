import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GoogleProviderWrapper } from './GoogleProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GoogleProviderWrapper>
    <App />
  </GoogleProviderWrapper>
);
