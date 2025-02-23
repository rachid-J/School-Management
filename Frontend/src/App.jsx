import { RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AdminRoutes } from "./routes/AdminRoutes";
import { PublicRoutes } from "./routes/PublicRoutes";

function App() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const { user } = useSelector((state) => state.auth);
  const [routes, setRoutes] = useState(null);

  useEffect(() => {
      const routerMap = {
          Admin: AdminRoutes,
          // Add other roles as needed
      };

      if (role) {
          setRoutes(routerMap[role] || PublicRoutes);
      } else if (!token || !user) {
          setRoutes(PublicRoutes);
      }
  }, [role, token, user]);

  // Add loading state check
  if (routes === null) {
      return <div>Loading...</div>;
  }

  return <RouterProvider router={routes} />;
}

export default App;