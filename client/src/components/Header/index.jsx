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
        <div className="Header-userArea-notifications"></div>
        <div className="Header-userArea-info"></div>
      </div>
    </div>
  );
};

export default index;
