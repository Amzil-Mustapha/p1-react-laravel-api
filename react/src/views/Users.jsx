import React, { useEffect, useState } from "react";
import axiosClient from "../axios.client";

function Users() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = () => {
        setLoading(true);
        axiosClient
            .get("/users")
            .then(({ data }) => {
                setLoading(false);
                console.log(data);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    return <div>U</div>;
}

export default Users;
