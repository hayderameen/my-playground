import React from "react";
import { NavLink, Link } from "react-router-dom";

// Importing assets
import left from "../../assets/home/cover/left.svg";

// Importing CSS
import "../../css/home/cover.css";

const Cover = () => {
  return (
    <div id="home-cover">
      <img src={left} id="left-cover"></img>

      <nav>
        <Link className="logo navigation-item" to="/">
          Haider's Playground
        </Link>

        <ul>
          <li>
            <NavLink className="navigation-item" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navigation-item" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navigation-item" to="/portfolio">
              Portfolio
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="cover-text">
        <h1>Building wonderful experiences</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ad
          architecto fugiat!
        </p>
      </div>
    </div>
  );
};

export default Cover;
