import React, { Component } from "react";
import { scroller, Element } from "react-scroll";
import Cover from "./cover";
import HomeVectors from "./homeVectors";
import MySkills from "./mySkills";
import SuperPowers from "./superPowers";
import Portfolio from "./portfolio";
import Footer from "./footer";

class Home extends Component {
  state = { currentSection: 0 };

  section = ["cover", "MySkills", "SuperPowers", "Portfolio", "Footer"];

  componentDidMount() {
    window.addEventListener("keydown", this.handlePageScroll);
    window.addEventListener("wheel", this.handlePageScrollWheel);
  }

  scrollUp = (currentSection) => {
    if (currentSection > 0) {
      // The scrolling animation here
      scroller.scrollTo(this.section[currentSection - 1], {
        duration: 400,
        smooth: "linear",
      });

      // Update state for next move
      this.setState({ currentSection: currentSection - 1 });
    } else {
      scroller.scrollTo(this.section[0], {
        duration: 400,
        smooth: "linear",
      });
    }
  };

  scrollDown = (currentSection) => {
    if (currentSection < this.section.length - 1) {
      // The scrolling animation here
      scroller.scrollTo(this.section[currentSection + 1], {
        duration: 500,
        smooth: true,
      });

      // Update state for next move
      this.setState({ currentSection: currentSection + 1 });
    } else {
      scroller.scrollTo(this.section[this.section.length - 1], {
        duration: 400,
        smooth: "linear",
      });
    }
  };

  handlePageScroll = (e) => {
    const { currentSection } = this.state;
    if (e.key === "ArrowDown") {
      this.scrollDown(currentSection);
    } else if (e.key === "ArrowUp") {
      this.scrollUp(currentSection);
    }
  };

  handlePageScrollWheel = (e) => {
    const { currentSection } = this.state;
    const { wheelDeltaY } = e;

    console.log(e);

    // Values above 100 to avoid scrolling of trackpads
    if (wheelDeltaY < -100) {
      this.scrollDown(currentSection);
    } else if (wheelDeltaY > 100) {
      this.scrollUp(currentSection);
    }
  };

  render() {
    return (
      <React.Fragment>
        <HomeVectors />
        <Element name="cover">
          <Cover />
        </Element>
        <Element name="MySkills">
          <MySkills />
        </Element>
        <Element name="SuperPowers">
          <SuperPowers />
        </Element>
        <Element name="Portfolio">
          <Portfolio />
        </Element>
        <Element name="Footer">
          <Footer />
        </Element>
      </React.Fragment>
    );
  }
}

export default Home;
