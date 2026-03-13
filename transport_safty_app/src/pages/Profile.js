import React from "react";
import { auth } from "../firebase";

function Profile() {

  const user = auth.currentUser;

  return (

    <div style={{ padding: "40px" }}>

      <h2>User Profile</h2>

      {user ? (

        <div>

          <p>Email: {user.email}</p>
          <p>User ID: {user.uid}</p>

        </div>

      ) : (

        <p>No user logged in</p>

      )}

    </div>

  );
}

export default Profile;