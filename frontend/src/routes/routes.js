import App from '../pages/App';
import Lobby from '../pages/Lobby';
const routes = [
    {
        path: '/', element: <App />,
    },
    {
        path: '/lobby/:id', element: <Lobby />,
    },
]
export default routes