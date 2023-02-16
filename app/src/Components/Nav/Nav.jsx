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
        <div className="pestaña">Sobre mí</div>
      </NavLink>
      <NavLink to="/projects">
        <div className="pestaña">Proyectos</div>
      </NavLink>
      <NavLink to="/contact">
        <div className="pestaña" id="cont">
          Contacto
        </div>
      </NavLink>
    </nav>
  );
};

export default Nav;
