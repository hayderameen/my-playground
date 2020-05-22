import React, { Component } from "react";

// Importing CSS
import "../../css/home/mySkills.css";

class MySkills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTicker: "",
      popout: "no", // Updated via props from home scroller or nav scroller
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  onScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY >= 877) {
      // My Skills page is now showing
      // Lets display its animations here
      this.setState({ showTicker: "show-ticker" });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { popout } = this.state;
    if (popout !== "yes" && this.props.popout === "yes") {
      this.setState({ popout: "yes", showTicker: "show-ticker" });
    }
  }

  render() {
    return (
      <section id="my-skills-cover" onScroll={this.onScroll}>
        <h1 id="my-skills-heading">My Skills</h1>
        <div className={`${this.state.showTicker} ticker`} id="ticker1">
          <h1>Responsive Web Design</h1>
        </div>
        <div className={`${this.state.showTicker} ticker`} id="ticker2">
          <h1>Creative &amp; Smooth Experience</h1>
        </div>
        <div className={`${this.state.showTicker} ticker`} id="ticker3">
          <h1>Dynamic Animations for UI/UX</h1>
        </div>
        <div className={`${this.state.showTicker} ticker`} id="ticker4">
          <h1>Scalable RESTful APIs in back-end</h1>
        </div>
      </section>
    );
  }
}

export default MySkills;
