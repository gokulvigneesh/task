import React from "react";
import { Link } from "react-router-dom";
import './task.css'

const NavBar = () => {
  return (
    <nav className="navbar1">
      <div className="navbar__container1">
        <div className="navbar__brand1">
          <Link to="/" className="navbar__link1">
            My Website
          </Link>
        </div>
        <div className="navbar__menu1">
          <div className="navbar__item1">
            <Link to="/component1/tailwind" className="navbar__link1">
              Task 1
            </Link>
          </div>
          <div className="navbar__item1">
            <Link to="/component4/task1" className="navbar__link1">
              Task 2
            </Link>
          </div>
          <div className="navbar__item1">
            <Link to="/component2/form" className="navbar__link1">
              Task 3
            </Link>
          </div>
          <div className="navbar__item1">
            <Link to="/component3/TodoList" className="navbar__link1">
              Task 4
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
