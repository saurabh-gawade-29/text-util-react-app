// These are default import 
import React from "react";
import PropTypes from 'prop-types'
import './Navbar.css';
import { Link } from "react-router-dom";

// Named import here is a {component} is named import 
// import React, { Component } from 'react'


const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand navbar-logo-text" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about_title}</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

// Its Defualt Export
export default Navbar;
// Its Named Export 
// export {a}


// typechecking with proptypes as object
Navbar.propTypes = {
  title: PropTypes.string,
  about_title: PropTypes.string,
}

//default Props
Navbar.defaultProps = {
  title: "Set Title Here",
  about_title: "Set About_Title here",
}