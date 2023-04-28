import Echo from 'laravel-echo';

import Pusher from 'pusher-js';
import config from '../helpers/config';

window.Pusher = Pusher;

export function createSocketConnection() {
    if (!window.Echo) {
        window.Echo = new Echo({
            broadcaster: 'pusher',
            port: 8000,
            authEndpoint: `${config.backend_url}broadcasting/auth`,
            key: process.env.REACT_APP_PUSHER_KEY,
            cluster: process.env.REACT_APP_PUSHER_CLUSTER
            // forceTLS: true
        });
    }
}
