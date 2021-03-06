import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => (
  <ul className="nav nav-tabs">

    <li className="nav-item">
        Pupster
    </li>

    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        About
      </Link>
    </li>

    <li className="nav-item">
      <Link
        to="/search"
        className={
          window.location.pathname === "/blog" ? "nav-link active" : "nav-link"
        }
      >
        Search
      </Link>
    </li>

    <li className="nav-item">
      <Link
        to="/discover"
        className={
          window.location.pathname === "/contact" ? "nav-link active" : "nav-link"
        }
      >
        Discover
      </Link>
    </li>

  </ul>
);

export default NavTabs;
