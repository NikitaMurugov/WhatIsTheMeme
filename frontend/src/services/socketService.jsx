import Echo from 'laravel-echo';

import Pusher from 'pusher-js';
import config from '../helpers/config';

window.Pusher = Pusher;

export function createSocketConnection() {
    if (!window.Echo) {
        window.Echo = new Echo({
            broadcaster: 'pusher',
            authEndpoint: `${config.api_url}broadcasting/init`,
            key: process.env.REACT_APP_PUSHER_KEY,
            cluster: process.env.REACT_APP_PUSHER_CLUSTER
            // forceTLS: false
        });
    }
}
