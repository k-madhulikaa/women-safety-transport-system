import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  return (

    <div
      style={{
        backgroundColor: "#111",
        color: "white",
        padding: "15px 25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >

      {/* Logo */}
      <h3 style={{ margin: 0 }}>
        Transport Safety
      </h3>

      {/* Navigation Links */}
      <div>

        <span
          style={{ marginRight: "25px", cursor: "pointer" }}
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </span>

        <span
          style={{ marginRight: "25px", cursor: "pointer" }}
          onClick={() => navigate("/history")}
        >
          My Trips
        </span>

        <span
          style={{ marginRight: "25px", cursor: "pointer" }}
          onClick={() => navigate("/contacts")}
        >
          Emergency
        </span>

        <span
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/profile")}
        >
          Profile
        </span>

      </div>

    </div>

  );
}

export default Navbar;