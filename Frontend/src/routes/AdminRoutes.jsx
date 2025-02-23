import { createBrowserRouter } from 'react-router-dom';
import { Dashboard } from '../pages/admin/Dashboard';
import { AdminLayouts } from '../pages/admin/AdminLayouts';

export const AdminRoutes = createBrowserRouter([
    {
        path: "/admin",
        element: <AdminLayouts />,
        children: [
          {
            path: "dashboard", 
            element: <Dashboard />
          },
        
        ]
      } , {
        path: "*",
        element: <h1>404</h1>
      }
      
]);
