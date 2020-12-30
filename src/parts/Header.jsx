import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import Button from "elements/Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Home from "scenes/Home";
import DetailProduct from "scenes/DetailProduct";
function Header(props) {
  return (
    <Fragment>
      {/* ini adalah component header */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Lindungi<span>hutan</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/projek" className="nav-link">
                  Projek
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/parner" className="nav-link">
                  Parner
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tentang" className="nav-link">
                  Tentang Kami
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/detail-product" className="nav-link">
                  Detail
                </Link>
              </li>
            </ul>
            {/* memanggil component Button dengan props isPrimary dan isSmall */}
            <Button isPrimary isSmall>
              Sign Up
            </Button>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Header;
