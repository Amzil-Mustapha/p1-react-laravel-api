import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./views/login";
import Signup from "./views/Signup";
import Users from "./views/users";
import NotFound from "./views/NotFound";
import DefaultLyaout from "./components/DefaultLyaout";
import GestLyaout from "./components/GestLyaout";
import Dashboard from "./views/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLyaout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/users" />, 
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/users",
                element: <Users />,
            },
        ],
    },
    {
        path: "/",
        element: <GestLyaout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
        ],
    },

    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
