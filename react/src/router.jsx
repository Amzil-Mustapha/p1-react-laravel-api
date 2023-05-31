import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLyaout from "./components/DefaultLyaout.jsx";
import Dashboard from "./views/Dashboard";
import Users from "./views/users.jsx";
import GestLyaout from "./components/GestLyaout.jsx";
import Login from "./views/login.jsx";
import Signup from "./views/Signup.jsx";
import NotFound from "./views/NotFound.jsx";

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
        element: <GestLyaout/>,
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
