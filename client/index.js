import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store.js';


//store={store}

const root = createRoot(document.getElementById('top'));
root.render(
    <App />
);