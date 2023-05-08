import { Avatar } from "@mui/material";
import React from "react";

function Header() {
  return (
    <div style={{ backgroundColor: "#1976d2", color: "white" }}>
      <div className="container ">
        <div className="header">
          <h3>Logo</h3>
          <div className="nav">
            <div>Link1</div>
            <div>Link1</div>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
