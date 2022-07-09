import React from "react";
import Infobar from "../../components/Infobar";

import "./Profile.scss";

const Profile = () => {
  return (
    <div className="Profile">
      <h1 className="Profile-header">My Profile</h1>
      <div className="Profile-body">
        <Infobar />
        <div className="Profile-body-dashboard"></div>
      </div>
    </div>
  );
};

export default Profile;
