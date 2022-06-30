import React from 'react';
import logowhite from '../../assets/images/logowhite.svg';
import './navbar.css';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Disconnect from '../Disconnect';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const OnLogout = () => {
    handleClick();
    <Disconnect />;
  };

  return (
    <div className="navbar-container">
      <ul className="navbar-list">
        <li>
          <NavLink
            to="./home"
            className={(navData) =>
              navData.isActive
                ? 'active nav-links navlink-logo'
                : 'nav-links navlink-logo'
            }
            onClick={handleClick}
          >
            <img src={logowhite} alt="#" className="navbar-logo navlink-logo" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="./home"
            className={(navData) =>
              navData.isActive ? 'active nav-links' : 'nav-links'
            }
            onClick={handleClick}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="./courses"
            className={(navData) =>
              navData.isActive ? 'active nav-links' : 'nav-links'
            }
            onClick={handleClick}
          >
            Courses
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
      </ul>

      <NavLink
        to="./user-profile"
        className={(navData) =>
          navData.isActive
            ? 'active nav-links navlink-user'
            : 'nav-links navlink-user'
        }
        onClick={handleClick}
      >
        <img
          src="https://randomwordgenerator.com/img/picture-generator/55e0d1464d52aa14f1dc8460962e33791c3ad6e04e507441722a72dc9244c4_640.jpg"
          alt="#"
          className="navbar-user"
        />
      </NavLink>
      <div>
        <NavLink to="./" className="nav-links logOut" onClick={OnLogout}>
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
