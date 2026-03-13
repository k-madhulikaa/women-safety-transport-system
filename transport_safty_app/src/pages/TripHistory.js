import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function TripHistory() {

  const [trips, setTrips] = useState([]);

  useEffect(() => {

    const loadTrips = async () => {

      const data = await getDocs(collection(db, "trips"));

      setTrips(data.docs.map((doc) => doc.data()));

    };

    loadTrips();

  }, []);

  return (

    <div style={{ padding: "40px" }}>

      <h2>Trip History</h2>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>Bus Number</th>
            <th>Status</th>
            <th>Start Time</th>
            <th>End Time</th>
          </tr>
        </thead>

        <tbody>

          {trips.map((trip, index) => (

            <tr key={index}>

              <td>{trip.busNumber}</td>

              <td>{trip.status}</td>
              
              <td>{trip.startTime?.toDate().toString()}</td>

              <td>{trip.endTime?.toDate().toString()}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}

export default TripHistory;