import App from '../pages/App';
import Index from '../pages/Index';
import Lobby from '../pages/Lobby';

const routes = [
    {
        path: '/',
        element: <Index />
    },
    {
        path: '/lobby',
        element: <Lobby />
    },
    {
        path: '/lobby/:code',
        element: <App />
    }
];
export default routes;
