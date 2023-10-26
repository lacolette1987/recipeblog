import React from "react";
import {auth} from "../firebase-config";
import {Navigate, Outlet} from "react-router-dom";

export const PrivateRoutes = () => {
    const currentUser = auth.currentUser;

    return (
        currentUser ? <Outlet/> : <Navigate to='/login'/>
    )
}
