import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";
import "./NavBar.css";


export default function NavBar() {
  return (
    <nav className="Nav navbar navbar-expand-lg navbar-dark bg-dark">
       
      <div className="top container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Logo"
            height="65"
            className="d-inline-block align-text-top rounded-circle"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About Me</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Skills">Skills</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Experience">Experience</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/Projects">Projects</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/Reachme">Reach Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
