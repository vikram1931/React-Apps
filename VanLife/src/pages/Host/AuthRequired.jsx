import React from "react";
import { Outlet, Navigate } from "react-router-dom";
export default function AuthRequired() {
  const Authenticated = false;

  if (!Authenticated) {
    return (
      <Navigate to="/login" state={{ message: "You must log in first" }} />
    );
  }

  return <Outlet />;
}
