import React from "react";
import Header from "../components/layout/Header";
import SideMenu from "../components/layout/SideMenu";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="inner">
          <SideMenu />
          <div style={{ padding: "1rem", width: "100%" }}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
