import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/fonts.css';
import './assets/css/index.css';
import Router from './routes/Router';

// import Echo from 'laravel-echo';
// import Pusher from 'pusher-js';

// window.Pusher = Pusher;
//
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.REACT_APP_PUSHER_KEY,
//     cluster: process.env.REACT_APP_PUSHER_CLUSTER,
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
);
