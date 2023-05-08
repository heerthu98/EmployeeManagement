import React from "react";
import { Link } from "react-router-dom";

function SideMenu() {
  return (
    <div
      style={{
        backgroundColor: "#f1f1f1",
        width: "300px",
        padding: "1rem ",
        height: "90vh",
      }}
    >
      <div style={{ display: "grid", gap: "1rem" }}>
        <Link style={{ textDecoration: "none" }} to="/">
          Dashboard
        </Link>
        <Link style={{ textDecoration: "none" }} to="/orders">
          Orders
        </Link>
      </div>
    </div>
  );
}

export default SideMenu;
