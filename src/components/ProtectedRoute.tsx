import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const isAuthenticated = !!localStorage.getItem("access_token"); // Check if user is logged in

    return isAuthenticated ? <Outlet /> : <Navigate to="/Sigin" replace />;
};

export default ProtectedRoute;
