import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/fonts.css';
import './assets/css/index.css';
import Router from './routes/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
);
