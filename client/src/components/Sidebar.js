import React, { useEffect } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    const searchBtn = document.querySelector(".bx-search");

    const menuBtnChange = () => {
      if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
      }
    };

    const toggleSidebar = () => {
      sidebar.classList.toggle("open");
      menuBtnChange();
    };

    closeBtn.addEventListener("click", toggleSidebar);
    searchBtn.addEventListener("click", toggleSidebar);

    // Cleanup the event listeners when the component is unmounted
    return () => {
      closeBtn.removeEventListener("click", toggleSidebar);
      searchBtn.removeEventListener("click", toggleSidebar);
    };
  }, []);
  return (
    <div className="sidebar">
      <div className="logo-details">
        <i className="bx bxl-c-plus-plus icon"></i>
        <div className="logo_name">Matrix</div>
        <i className="bx bx-menu" id="btn"></i>
      </div>
      <ul className="nav-list">
        <li>
          <i className="bx bx-search"></i>
          <input type="text" placeholder="Search here" />
          <span className="tooltip">Search</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-grid-alt"></i>
            <span className="links_name">Dashboard</span>
          </a>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-user"></i>
            <span className="links_name">User</span>
          </a>
          <span className="tooltip">User</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-chat"></i>
            <span className="links_name">Messages</span>
          </a>
          <span className="tooltip">Messages</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-pie-chart-alt-2"></i>
            <span className="links_name">Crypto Analytics</span>
          </a>
          <span className="tooltip">Analytics</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-folder"></i>
            <span className="links_name">Explore</span>
          </a>
          <span className="tooltip">Explore</span>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-cart-alt"></i>
            <span className="links_name">Escape the M</span>
          </a>
          <span className="tooltip">Escape</span>
        </li>
        <li className="profile">
          <div className="profile-details">
            <img
              src="https://wallpaperaccess.com/full/7813043.jpg"
              alt="profile"
            />
            <div className="name_job">
              <div className="name">Aditya Sooraj</div>
              <div className="job">CEO Bitch!</div>
            </div>
          </div>
          <i className="bx bx-log-out" id="log_out"></i>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
