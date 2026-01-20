import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <h4 className="sidebar-title">Menu</h4>
      <ul className="sidebar-menu">
        <li>
          <NavLink
            to="/add-user"
            className={({ isActive }) =>
              `sidebar-menu-item ${isActive ? "active" : ""}`
            }
          >
            ➕ Add User
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/view-users"
            className={({ isActive }) =>
              `sidebar-menu-item ${isActive ? "active" : ""}`
            }
          >
            👥 View Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
