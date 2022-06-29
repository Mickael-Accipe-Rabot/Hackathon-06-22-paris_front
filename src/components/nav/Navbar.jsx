import React from 'react';
import './navbar.css';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar-container">
      <NavLink
        to="./home"
        className={(navData) =>
          navData.isActive ? 'active nav-links' : 'nav-links'
        }
        onClick={handleClick}
      >
        <img src="" alt="#" className="navbar-logo" />
      </NavLink>
      <ul className="navbar-list">
        <li>
          <NavLink
            to="./home"
            className={(navData) =>
              navData.isActive ? 'active nav-links' : 'nav-links'
            }
            onClick={handleClick}
          >
            Projets
          </NavLink>
        </li>
        <li>
          <NavLink
            to="./clientslist"
            className={(navData) =>
              navData.isActive ? 'active nav-links' : 'nav-links'
            }
            onClick={handleClick}
          >
            Clients
          </NavLink>
        </li>
      <li>
      <NavLink
        to="./user-profile"
        className={(navData) =>
          navData.isActive ? 'active nav-links' : 'nav-links'
        }
        onClick={handleClick}
      >
        <img src="" alt="#" className="navbar-user" />
      </NavLink>
      </li>
      </ul>
    </div>
  );
};

export default Navbar;
