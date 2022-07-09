import React from "react";
import Navbar from "../../components/Navbar";

import "./Profile.scss";

const Profile = () => {
  return (
    <div className="Profile">
      <h1 className="Profile-header">My Profile</h1>
      <div className="Profile-body">
        <div className="Profile-body-info"></div>
        <div className="Profile-body-dashboard"></div>
      </div>
    </div>
  );
};

export default Profile;
