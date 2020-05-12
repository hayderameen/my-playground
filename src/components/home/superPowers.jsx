import React, { Component } from "react";

// Importing CSS
import "../../css/home/superPowers.css";

class SuperPowers extends Component {
  constructor(props) {
    super(props);
    this.state = { showPowers: "hide-powers" };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  onScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY >= 1080) {
      // My SuperPowers section is now showing
      // Lets display its animations here
      this.setState({ showPowers: "show-powers" });
    }
  };

  render() {
    return (
      <section id="superpowers-cover" onScroll={this.onScroll}>
        <div id="superpower-heading" className={this.state.showPowers}>
          <div id="power-left"></div>
          <h1 id="power-text">MY SUPERPOWERS</h1>
          <div id="power-right"></div>
        </div>
      </section>
    );
  }
}

export default SuperPowers;
