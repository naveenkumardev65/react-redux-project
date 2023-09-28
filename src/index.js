import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Connecting Store Using Provider. It Helps to distribute the store data to app components */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

