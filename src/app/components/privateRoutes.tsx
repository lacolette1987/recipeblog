import React from "react";
import {auth} from "../firebase-config";
import {Navigate, Outlet} from "react-router-dom";
import useAuth from "../context/AuthContext";

export const PrivateRoutes = () => {

    const {user} = useAuth();


    return (
        user ? <Outlet/> : <Navigate to='/login'/>
    )
}
