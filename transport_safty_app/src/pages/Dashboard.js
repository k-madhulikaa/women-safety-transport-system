import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DriverCard from "../components/DriverCard";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

function Dashboard() {

  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");

  const busNumber = localStorage.getItem("busNumber");
  const tripId = localStorage.getItem("tripId");

  useEffect(() => {

    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      return;
    }

    navigator.geolocation.watchPosition(

      (position) => {

        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });

      },

      (err) => {

        console.log(err);
        setError("Location permission denied");

      },

      {
        enableHighAccuracy: true
      }

    );

  }, []);

  // SOS ALERT
  const sendSOS = () => {

    if (!location) {
      alert("Location not available");
      return;
    }

    const mapsLink =
      `https://maps.google.com/?q=${location.lat},${location.lng}`;

    alert(`🚨 EMERGENCY ALERT

Location:
${mapsLink}`);

  };

  // END TRIP
  const endTrip = async () => {

    if (!tripId) {
      alert("No active trip");
      return;
    }

    try {

      await updateDoc(doc(db, "trips", tripId), {
        endTime: new Date(),
        status: "completed"
      });

      localStorage.removeItem("tripId");
      localStorage.removeItem("busNumber");

      alert("Trip Ended Successfully");

      window.location.reload();

    } catch (error) {

      console.error(error);
      alert("Error ending trip");

    }

  };

  return (

    <div>

      {/* NAVBAR */}
      <Navbar />

      <div style={{ display: "flex" }}>

        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN DASHBOARD */}
        <div style={{ flex: 1, padding: "20px" }}>

          <h2>Passenger Safety Dashboard</h2>

          {error && <p>{error}</p>}

          {!location && <p>Fetching Live Location...</p>}

          {/* LIVE MAP */}
          {location && (

            <iframe
              title="map"
              width="100%"
              height="350"
              style={{ border: 0 }}
              src={`https://www.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`}
            />

          )}

          {/* DRIVER INFO */}
          <DriverCard busNumber={busNumber} />

          {/* SOS BUTTON */}
          <button
            onClick={sendSOS}
            style={{
              marginTop: "20px",
              padding: "15px 25px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            🚨 SOS Emergency
          </button>

          {/* END TRIP BUTTON */}
          <br />

          <button
            onClick={endTrip}
            style={{
              marginTop: "15px",
              padding: "12px 20px",
              backgroundColor: "orange",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            End Trip
          </button>

        </div>

      </div>

    </div>

  );
}

export default Dashboard;