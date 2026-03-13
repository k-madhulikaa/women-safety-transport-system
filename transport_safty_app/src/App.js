import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import StartTrip from "./pages/StartTrip";
import EmergencyContacts from "./pages/EmergencyContacts";
import TripHistory from "./pages/TripHistory";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/start-trip" element={<StartTrip />} />

        <Route path="/contacts" element={<EmergencyContacts />} />

        <Route path="/history" element={<TripHistory />} />

        <Route path="/settings" element={<Settings />} />

        <Route path="/profile" element={<Profile />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;