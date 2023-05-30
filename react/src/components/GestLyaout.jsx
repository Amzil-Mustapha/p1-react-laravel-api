import { useStateContext } from "../contexts/ContextProvider";
import { Navigate } from "react-router-dom";

function GestLyaout() {
    const { token } = useStateContext();
    if (token) {
        return <Navigate to="/" />;
    }
    return <div>GestLyaout</div>;
}

export default GestLyaout;
