import React from "react";

import { Link } from "react-router-dom";

import asimCv from "../images/asim.pdf";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        M.Asim Maqsood
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <Link className="nav-link active" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blogs">
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item form-inline my-2 my-lg-0">
            <a
              className="nav-link mr-sm-2"
              href={asimCv}
              download="M.Asim Maqsood's CV"
            >
              <i className="fa fa-download"></i> Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
