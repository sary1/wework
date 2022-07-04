import React from "react";
import "./Header.scss";

const index = () => {
  return (
    <div className="Header">
      <div className="Header-searchArea">
        <i class="Header-searchArea-searchBtn fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Search"
          className="Header-searchArea-inputField"
        />
      </div>
      <div className="Header-userArea">
        <div className="Header-userArea-notifications">
          <i class="fa-solid fa-bell"></i>
        </div>
        <div className="Header-userArea-info">
          <div className="Header-userArea-info-pp">
            <img
              src="/images/user1.jpg"
              alt="profile-pic"
              className="Header-userArea-info-ppImg"
            />
          </div>
          <p className="Header-userArea-info-name">Harry Wilson</p>
          <i class="Header-userArea-info-icon fa-solid fa-angle-down"></i>
        </div>
      </div>
    </div>
  );
};

export default index;
