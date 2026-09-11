import React from "react";
import imageUrl from "../images/avatar-icon.png";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/host">
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/about">
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/Vans">
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <img alt="" src={imageUrl} className="login-icon" />
        </Link>
      </nav>
    </header>
  );
}
