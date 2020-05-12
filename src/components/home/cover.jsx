import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

// Importing assets
import profile from "../../assets/home/cover/profile.png";

// Importing CSS
import "../../css/home/cover.css";

class Cover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullStack: "Front-End UI/UX Developer",
      showText: "hideText",
      playgroundShow: "hideText",
    };
  }

  componentDidMount() {
    this.animateFullStackChangeText();
  }

  animateFullStackChangeText() {
    const texts = [
      "Front-End UI/UX Developer",
      "Back-End Developer",
      "Full-Stack Web Developer",
    ];

    setTimeout(() => {
      this.setState({ showText: "showText" });
      setTimeout(() => {
        this.setState({ showText: "hideText" });
        setTimeout(() => {
          this.setState({ fullStack: "....and", showText: "showText" });
          setTimeout(() => {
            this.setState({ showText: "hideText" });
            setTimeout(() => {
              this.setState({ fullStack: texts[1], showText: "showText" });
              setTimeout(() => {
                this.setState({ showText: "hideText" });
                setTimeout(() => {
                  this.setState({
                    fullStack: "....alright...",
                    showText: "showText",
                  });
                  setTimeout(() => {
                    this.setState({
                      showText: "hideText",
                    });
                    setTimeout(() => {
                      this.setState({
                        fullStack: texts[2],
                        showText: "showText",
                      });
                      setTimeout(() => {
                        this.setState({ playgroundShow: "showText" });
                      }, 1000);
                    }, 1500);
                  }, 1500);
                }, 1500);
              }, 1500);
            }, 1500);
          }, 1500);
        }, 1500);
      }, 1500);
    }, 1000);
  }

  render() {
    return (
      <section id="home-cover">
        <img
          id="profile-picture"
          src={profile}
          alt="Muhammad Haider Amin"
        ></img>
        <nav>
          <Link className="logo navigation-item" to="/">
            M. Haider Amin
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
            I'm a{" "}
            <span id="full-stack-text" className={this.state.showText}>
              {" "}
              {this.state.fullStack}
            </span>
          </h1>
          <p className={this.state.playgroundShow}>
            and this is my{" "}
            <span style={{ color: "#0d5c63", fontSize: "1.2em" }}>
              <b>playground</b>
            </span>
          </p>
        </div>
      </section>
    );
  }
}

export default Cover;
