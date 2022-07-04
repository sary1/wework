import React from "react";
import "./Header.scss";

const index = () => {
  return (
    <div className="Header">
      <div className="Header-searchArea">
        <input type="text" placeholder="Search" />
      </div>
      <div className="Header-userArea">
        <div className="Header-userArea-notifications"></div>
        <div className="Header-userArea-info"></div>
      </div>
    </div>
  );
};

export default index;
