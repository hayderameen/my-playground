import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

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
                    fullStack: "....alright....",
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
              <Link
                className="navigation-item"
                style={{ color: "#12355b" }}
                to="my-skills-cover"
                spy={true}
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="navigation-item"
                style={{ color: "#22031f" }}
                to="superpowers-cover"
                spy={true}
                smooth={true}
                duration={600}
              >
                Tools
              </Link>
            </li>
            <li>
              <Link
                className="navigation-item"
                style={{ color: "#22031f" }}
                to="portfolio"
                spy={true}
                smooth={true}
                duration={700}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                className="navigation-item"
                style={{ color: "#22031f", fontWeight: "bolder" }}
                to="footer"
                spy={true}
                smooth={true}
                duration={800}
              >
                Contact
              </Link>
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
