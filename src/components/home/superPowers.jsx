import React, { Component } from "react";

// Importing CSS
import "../../css/home/superPowers.css";

class SuperPowers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPowers: "hide-powers",
      flyhero: "",
      showPowerIcon: "hide-power",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  onScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY >= 1080) {
      // My SuperPowers section is now showing
      // Lets display its animations here
      this.setState({
        showPowers: "show-powers",
        flyhero: "fly-hero-in",
        showPowerIcon: "show-power",
      });
    }
  };

  render() {
    const { showPowers, flyhero, showPowerIcon } = this.state;
    return (
      <section id="superpowers-cover" onScroll={this.onScroll}>
        <div id="superpower-heading" className={showPowers}>
          <div id="power-left"></div>
          <h1 id="power-text">MY SUPERPOWERS</h1>
          <div id="power-right"></div>
        </div>
        <div id="superhero-figure" className={flyhero}></div>
        <div id="superPowers-texts">
          <div className="powers-row">
            <div id="javascript" className={showPowerIcon}>
              <div></div>
            </div>
            <div id="html5" className={showPowerIcon}>
              <div></div>
            </div>
            <div id="css" className={showPowerIcon}>
              <div></div>
            </div>
          </div>

          <div className="powers-row">
            <div id="webpack" className={showPowerIcon}>
              <div></div>
            </div>
            <div id="react" className={showPowerIcon}>
              <div></div>
            </div>
            <div id="node" className={showPowerIcon}>
              <div></div>
            </div>
          </div>

          <div className="powers-row">
            <div id="jquery" className={showPowerIcon}>
              <div></div>
            </div>
            <div id="sass" className={showPowerIcon}>
              <div></div>
            </div>
            <div id="socket" className={showPowerIcon}>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SuperPowers;
