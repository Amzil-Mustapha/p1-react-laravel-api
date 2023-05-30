import { useStateContext } from "../contexts/ContextProvider";
import { Navigate, Outlet } from "react-router-dom";

function GestLyaout() {
    const { token } = useStateContext();
    if (token) {
        return <Navigate to="/" />;
    }
    return <Outlet />;
}

export default GestLyaout;
