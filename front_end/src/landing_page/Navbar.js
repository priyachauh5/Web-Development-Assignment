import React from "react";
// import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div class="container p-2">
        <a class="navbar-brand" href="">
          {/* <img src="Images/logo.svg" style={{ width: "25%" }} alt="logo" /> */}
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="">
                  Infrastructure
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="">
                  Admission
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="">
                  Activities
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="">
                  Contact Us
                </a>
              </li>

            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
