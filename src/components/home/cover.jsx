import React from "react";
import { NavLink, Link } from "react-router-dom";

// Importing assets
import profile from "../../assets/home/cover/profile.png";

// Importing CSS
import "../../css/home/cover.css";

const Cover = () => {
  return (
    <div id="home-cover">
      <img id="profile-picture" src={profile} alt="Muhammad Haider Amin"></img>
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
        <h1>
          I'm a <span id="full-stack-text"> Full-Stack</span> Web Developer
        </h1>
        <p>
          and this is my{" "}
          <span style={{ color: "#0d5c63", fontSize: "1.2em" }}>
            <b>playground</b>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Cover;
