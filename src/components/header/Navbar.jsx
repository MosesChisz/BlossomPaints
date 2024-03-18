import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { useNavigate, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <div id="logoBox">
          <img src={logo} />
        </div>
        <button
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className={`toggle-button ${isActive ? "active" : ""}`}
          onClick={handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li
              class="nav-item"
              onClick={() => {
                navigate("/");
              }}
            >
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="navLink"
              >
                HOME
              </a>
            </li>
            <li
              class="nav-item"
              onClick={() => {
                navigate("/about");
              }}
            >
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="navLink"
              >
                ABOUT
              </a>
            </li>
            <li
              class="nav-item"
              onClick={() => {
                navigate("/services");
              }}
            >
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="navLink"
              >
                SERVICES
              </a>
            </li>
            <li
              class="nav-item"
              onClick={() => {
                navigate("/projects");
              }}
            >
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="navLink"
              >
                PROJECTS
              </a>
            </li>
            <li
              class="nav-item"
              onClick={() => {
                navigate("/products");
              }}
            >
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="navLink"
              >
                PRODUCTS
              </a>
            </li>
            <li
              class="nav-item"
              onClick={() => {
                navigate("/contact");
              }}
            >

              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="navLink"
              >
                CONTACT
              </a>
            </li>
          </ul>
          <div id="navBtn">       
          <a href="https://wa.me/+27620162346">LET'S CHAT</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
