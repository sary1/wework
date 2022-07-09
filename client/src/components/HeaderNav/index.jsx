import React from "react";
import "./HeaderNav.scss";

const index = () => {
  return (
    <div className="HeaderNav">
      <div className="HeaderNav-searchArea">
        <i class="HeaderNav-searchArea-searchBtn fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Search"
          className="HeaderNav-searchArea-inputField"
        />
      </div>
      <div className="HeaderNav-userArea">
        <div className="HeaderNav-userArea-notifications">
          <i class="fa-solid fa-bell"></i>
        </div>
        <div className="HeaderNav-userArea-info">
          <div className="HeaderNav-userArea-info-pp">
            <img
              src="/images/user1.jpg"
              alt="profile-pic"
              className="HeaderNav-userArea-info-ppImg"
            />
          </div>
          <p className="HeaderNav-userArea-info-name">Harry Wilson</p>
          <i class="HeaderNav-userArea-info-icon fa-solid fa-angle-down"></i>
        </div>
      </div>
    </div>
  );
};

export default index;
