import App from '../pages/App';
import Lobby from '../pages/Lobby';
const routes = [
    {
        path: '/',
        element: <App />
    },
    {
        path: '/lobby/:code',
        element: <Lobby />
    }
];
export default routes;
