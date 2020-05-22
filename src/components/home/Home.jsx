import React, { Component } from "react";
import { scroller, Element } from "react-scroll";
import Cover from "./cover";
import HomeVectors from "./homeVectors";
import MySkills from "./mySkills";
import SuperPowers from "./superPowers";
import Portfolio from "./portfolio";
import Footer from "./footer";

class Home extends Component {
  state = {
    currentSection: 0,
    popoutSections: {
      cover1: "no",
      MySkills1: "no",
      SuperPowers1: "no",
      Portfolio1: "no",
      Footer1: "no",
    },
  };

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

      // Update state for next move and sending popout signal
      let temp = { ...this.state.popoutSections };
      temp[this.section[currentSection - 1] + "1"] = "yes";
      this.setState({
        currentSection: currentSection - 1,
        popoutSections: temp,
      });
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
        smooth: "linear",
      });

      // Update state for next move and sending popout signal
      let temp = { ...this.state.popoutSections };
      temp[this.section[currentSection + 1] + "1"] = "yes";
      this.setState({
        currentSection: currentSection + 1,
        popoutSections: temp,
      });
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

    // Values above 100 to avoid scrolling of trackpads
    if (wheelDeltaY < -100) {
      this.scrollDown(currentSection);
    } else if (wheelDeltaY > 100) {
      this.scrollUp(currentSection);
    }
  };

  render() {
    const { popoutSections } = this.state;
    const {
      cover1,
      MySkills1,
      SuperPowers1,
      Portfolio1,
      Footer1,
    } = popoutSections;
    return (
      <React.Fragment>
        <HomeVectors />
        <Element name="cover">
          <Cover popout={cover1} />
        </Element>
        <Element name="MySkills">
          <MySkills popout={MySkills1} />
        </Element>
        <Element name="SuperPowers">
          <SuperPowers popout={SuperPowers1} />
        </Element>
        <Element name="Portfolio">
          <Portfolio popout={Portfolio1} />
        </Element>
        <Element name="Footer">
          <Footer popout={Footer1} />
        </Element>
      </React.Fragment>
    );
  }
}

export default Home;
