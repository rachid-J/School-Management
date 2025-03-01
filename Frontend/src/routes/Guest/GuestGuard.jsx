import { createBrowserRouter } from "react-router-dom";
import { Login } from "../../pages/auth/login";

import NotFound from "../../pages/common/NotFound";
import { GuestLayouts } from "../../Layouts/GuestLayouts";




export const GuestGuard = createBrowserRouter([
    
            {
                path: "/",
                element: <GuestLayouts />,
                children: [
                    {
                        path: "login",
                        element: <Login />,
                    },
                ],
            },  {
                path: "*", 
                element: <NotFound />,
            },
        ] )