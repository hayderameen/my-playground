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
            <NavLink
              className="navigation-item hover-class"
              style={{ color: "#22031f", fontWeight: "bolder" }}
              to="/portfolio"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navigation-item hover-class"
              style={{ color: "#12355b" }}
              to="/about"
            >
              About me
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="cover-text">
        <h1>I'm a Full-Stack Web Developer</h1>
        <p>and this is my playground</p>
      </div>
    </div>
  );
};

export default Cover;
