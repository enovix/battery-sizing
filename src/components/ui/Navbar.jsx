import React from "react";
import '../../Styles/Navbar.css'

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    
    <div className="navigationBar">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Efficient Tools & Solutions
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                {/* <Link class="nav-link" aria-current="page" to="/gallery">
                  Home
                </Link> */}
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/battery-sizing">
                  Battery Sizing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/solar-sizing">
                  Solar Sizing
                </Link>
              </li>
                <li class="nav-item">
                <Link class="nav-link" to="/notes">
                  Notes...
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
