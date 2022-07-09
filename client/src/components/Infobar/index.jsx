import React from "react";
import "./Infobar.scss";

const index = () => {
  return (
    <div className="Infobar">
      <div className="InfobarHeader">
        <img
          className="InfobarHeader-img"
          src="/images/user1.jpg"
          alt="user-Graphic"
        />
        <div className="InfobarHeader-roundBorder">
          <img src="/images/user1.jpg" alt="user-Graphic" />
        </div>
        <i className="editIcon fa-solid fa-pen-to-square"></i>
      </div>
      <div className="InfobarTitle">
        <h2 className="InfobarTitle-name">Harry Wilson</h2>
        <p className="InfobarTitle-job">Project Design Manager</p>
      </div>
      <hr />
    </div>
  );
};

export default index;
