import React from "react";
import { Outlet, Navigate } from "react-router-dom";
export default function AuthRequired() {
  const isLoggedIn = localStorage.getItem("loggedin");

  console.log(isLoggedIn);

  if (!isLoggedIn) {
    return (
      <Navigate to="/login" state={{ message: "You must log in first" }} />
    );
  }

  return <Outlet />;
}
