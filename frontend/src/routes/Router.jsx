import routes from './routes';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route) => {
                    return <Route key={route.path} path={route.path} element={route.element} />;
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
