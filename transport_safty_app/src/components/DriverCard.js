import React from "react";

function DriverCard({ busNumber }) {

  const tripId = localStorage.getItem("tripId");
  const status = tripId ? "Active" : "No Active Trip";

  return (

    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        width: "300px",
        marginTop: "20px"
      }}
    >

      <h4>Driver Info</h4>

      <p>Driver Name: Assigned Driver</p>

      <p>Vehicle Number: {busNumber || "No Vehicle"}</p>

      <p>Status: {status}</p>

    </div>

  );
}

export default DriverCard;