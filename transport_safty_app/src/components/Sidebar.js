import React from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  return (

    <div
      style={{
        width: "200px",
        background: "#eee",
        padding: "20px",
        height: "100vh"
      }}
    >

      <p style={{cursor:"pointer"}} onClick={()=>navigate("/dashboard")}>
        Dashboard
      </p>

      <p style={{cursor:"pointer"}} onClick={()=>navigate("/start-trip")}>
        Start Trip
      </p>

      <p style={{cursor:"pointer"}} onClick={()=>navigate("/contacts")}>
        Emergency Contacts
      </p>

      <p style={{cursor:"pointer"}} onClick={()=>navigate("/history")}>
        Trip History
      </p>

      <p style={{cursor:"pointer"}} onClick={()=>navigate("/settings")}>
        Settings
      </p>

    </div>

  );
}

export default Sidebar;