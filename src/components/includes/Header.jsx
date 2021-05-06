import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white nav-style">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" to="/">
            <img
              src="/images/brackit-logo.svg"
              alt="Brackit"
              className="menu-logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
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
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>

            <a href="#" className="btn btn-theme">
              Candidate
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
