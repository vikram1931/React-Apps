import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
export default function HostLayout() {
  const activestyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <>
      <nav className="host-nav">
        <NavLink
          style={({ isActive }) => (isActive ? activestyles : null)}
          to="/host"
          end>
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          end
          style={({ isActive }) => (isActive ? activestyles : null)}>
          Income
        </NavLink>

        <NavLink
          to="/host/vans"
          end
          style={({ isActive }) => (isActive ? activestyles : null)}>
          Vans
        </NavLink>

        <NavLink
          to="/host/reviews"
          end
          style={({ isActive }) => (isActive ? activestyles : null)}>
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
