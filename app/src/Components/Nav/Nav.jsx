import '../Nav/Nav.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navContainer">
      <NavLink to="/">
        <div className="pestaña">Home</div>
      </NavLink>
      <NavLink to="/about">
        <div className="pestaña">About</div>
      </NavLink>
      <NavLink to="/projects">
        <div className="pestaña">Projects</div>
      </NavLink>
      <NavLink to="/contact">
        <div className="pestaña" id="cont">
          Contact
        </div>
      </NavLink>
    </nav>
  );
};

export default Nav;
