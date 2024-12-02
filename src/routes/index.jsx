import Home from "../views/Home";
import Login from "../views/Login";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
    },
    {
        path: '/login',
        element: <Login />,
    },
])

export default routes;