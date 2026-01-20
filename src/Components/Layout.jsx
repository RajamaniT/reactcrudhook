import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../App.css";

const Layout = () => {
  return (
    <div className="app-wrapper">
      <Sidebar />
      <div className="main-content">
        <div className="container main-container">
          <h2 className="page-title">CRUD Operations</h2>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
