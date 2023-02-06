import '../Nav/Nav.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="navContainer">
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/projects">
          <li>Projects</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Nav;
