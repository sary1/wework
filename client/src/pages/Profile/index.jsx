import React from "react";

import "./Profile.scss";

const Profile = () => {
  return (
    <div className="Profile">
      <h1 className="Profile-header">My Profile</h1>
      <div className="Profile-body">
        <div className="Profile-body-info">
          <div className="Profile-body-infoHeader">
            <img
              className="Profile-body-infoHeader-img"
              src="/images/user1.jpg"
              alt="user-Graphic"
            />
            <div className="Profile-body-infoHeader-roundBorder">
              <img src="/images/user1.jpg" alt="user-Graphic" />
            </div>
            <i className="editIcon fa-solid fa-pen-to-square"></i>
          </div>
          <div className="Profile-body-infoTitle">
            <h2 className="Profile-body-infoTitle-name">Harry Wilson</h2>
            <p className="Profile-body-infoTitle-job">Project Design Manager</p>
          </div>
          <hr />
        </div>

        <div className="Profile-body-dashboard"></div>
      </div>
    </div>
  );
};

export default Profile;
