import React from "react";
import { Outlet } from "react-router-dom";

function DefaultLyaout() {
    return (
        <div>
        
            <Outlet />
        </div>
    );
}

export default DefaultLyaout;
