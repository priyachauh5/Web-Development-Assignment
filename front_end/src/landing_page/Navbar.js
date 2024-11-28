import React from "react";
// import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom fixed-top"
      style={{ backgroundColor: "#3AA6B9", height:"75px"}}
    >
      <div class="container p-2">
        <a class="navbar-brand" href="#">
          <img src="SchoolImage/logo.jpg" style={{ width: "80px", height:"75px" }} alt="logo" />
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

        <div
          class="collapse navbar-collapse dropdown"
          id="navbarSupportedContent"
          style={{ marginLeft: "25%" }}
        >
          <form class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto" style={{fontSize:"20px"}}>
              <li class="nav-item" style={{marginTop:"0.9%" }}>
                  <a class="nav-link active" aria-current="page" href="#" >
                    Home
                  </a>
              </li>
              <li class="nav-link dropdown" style={{ marginLeft: "1%" }}>
                <a class="nav-link active dropdown-toggle" aria-expended="false" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                  About us
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Introduction</a></li>
                    <li><a class="dropdown-item" href="#">Our Mission & Vision</a></li>
                    <li><a class="dropdown-item" href="#">Mandatory Disclosure</a></li>
                    <li><a class="dropdown-item" href="#">Principal's Desk</a></li>
                </ul>
              </li>
              <li class="nav-link dropdown" style={{ marginLeft: "1%" }}>
                <a class="nav-link active dropdown-toggle" aria-expended="false" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                  Infrastructure
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Reception</a></li>
                    <li><a class="dropdown-item" href="#">Mathematics Laboratory</a></li>
                    <li><a class="dropdown-item" href="#">Bio, Chem, PhyLab</a></li>
                    <li><a class="dropdown-item" href="#">Computer Lab</a></li>
                    <li><a class="dropdown-item" href="#">Play Zone</a></li>
                    <li><a class="dropdown-item" href="#">Music</a></li>
                    <li><a class="dropdown-item" href="#">Playground</a></li>
                    <li><a class="dropdown-item" href="#">Library</a></li>
                    <li><a class="dropdown-item" href="#">Transpotation</a></li>
                    <li><a class="dropdown-item" href="#">Class Room</a></li>
                </ul>
              </li>
              <li class="nav-link dropdown" style={{ marginLeft: "1%" }}>
                <a class="nav-link active dropdown-toggle" aria-expended="false" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                  Admission
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Procedure</a></li>
                    <li><a class="dropdown-item" href="#">Registration Form</a></li>
                    <li><a class="dropdown-item" href="#">Admission/Withdrawal rule</a></li>
                </ul>
              </li>
              <li class="nav-link dropdown" style={{ marginLeft: "1%" }}>
                <a class="nav-link active dropdown-toggle" aria-expended="false" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                  Academics
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Rules & Regulation</a></li>
                    <li><a class="dropdown-item" href="#">Assessments</a></li>
                    <li><a class="dropdown-item" href="#">Counselling</a></li>
                </ul>
              </li>
              <li class="nav-link dropdown" style={{ marginLeft: "1%" }}>
                <a class="nav-link active dropdown-toggle" aria-expended="false" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                  Activities
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Glimpse of Activities</a></li>
                    <li><a class="dropdown-item" href="#">Planner</a></li>
                </ul>
              </li>
              <li class="nav-item" style={{ marginLeft: "1%", marginTop:"0.9%"}}>
                  <a class="nav-link active" aria-current="page" href="#" >
                    Contact
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
