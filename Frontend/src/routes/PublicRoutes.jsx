



import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../pages/auth/login';
import { Home } from '../pages/common/Home';

export const PublicRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "login", 
                element: <Login />
            },
        ]
    },
    {
        path: "*",
        element: <h1>404</h1>
    }
]);
