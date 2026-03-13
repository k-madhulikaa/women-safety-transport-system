import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function StartTrip() {

  const [busNumber, setBusNumber] = useState("");
  const navigate = useNavigate();

  const startTrip = async () => {

    if (!busNumber) {
      alert("Enter bus number");
      return;
    }

    const trip = await addDoc(collection(db, "trips"), {
      busNumber: busNumber,
      startTime: new Date(),
      status: "active"
    });

    // Save locally for dashboard
    localStorage.setItem("busNumber", busNumber);
    localStorage.setItem("tripId", trip.id);

    alert("Trip Started");

    navigate("/dashboard");
  };

  return (
    <div style={{ padding: "40px" }}>

      <h2>Start Trip</h2>

      <input
        placeholder="Enter Bus Number"
        value={busNumber}
        onChange={(e) => setBusNumber(e.target.value)}
      />

      <br /><br />

      <button onClick={startTrip}>
        Start Trip
      </button>

    </div>
  );
}

export default StartTrip;