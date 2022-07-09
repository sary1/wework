import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar-logo">
        <img src="/images/company.png" alt="Company-Logo" />
      </div>

      <div className="Navbar-routes">
        <div className="Navbar-routes-item Navbar-routes-home">
          <i className="Navbar-routes-itemBrand fa-brands fa-windows"></i>
          <p>Home</p>
        </div>
        <div className="Navbar-routes-item Navbar-routes-outlook">
          <i className="Navbar-routes-itemBrand fa-solid fa-comments"></i>
          <p>Outlook</p>
        </div>
        <div className="Navbar-routes-item Navbar-routes-planner">
          <i className="Navbar-routes-itemBrand fa-solid fa-layer-group"></i>
          <p>Planner</p>
        </div>
        <div className="Navbar-routes-item Navbar-routes-calendar">
          <i className="Navbar-routes-itemBrand fa-solid fa-calendar"></i>
          <p>Calendar</p>
        </div>
      </div>

      <div className="Navbar-graphic">
        <img src="/images/developer.jpg" alt="Developer-Graphic" />
      </div>

      <div className="Navbar-logout">
        <i className="Navbar-routes-itemBrand fa-solid fa-right-from-bracket"></i>
        <p>Logout</p>
      </div>
    </div>
  );
};

export default Navbar;
