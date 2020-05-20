import React, { Component } from "react";

// Importing assets
import powersRightMySQL from "../../assets/home/superpowers/powersRightMySQL.svg";
import powersRightHeroku from "../../assets/home/superpowers/powersRightHeroku.svg";
import powersRightVSCode from "../../assets/home/superpowers/powersRightVSCode.svg";
import powersRightMongo from "../../assets/home/superpowers/powersRightMongo.svg";
import powersRightWP from "../../assets/home/superpowers/powersRightWP.svg";
import powersRightgit from "../../assets/home/superpowers/powersRightgit.svg";
import powersRightRedux from "../../assets/home/superpowers/powersRightRedux.svg";
import powersRightFirebase from "../../assets/home/superpowers/powersRightFirebase.svg";
import powersRightAPI from "../../assets/home/superpowers/powersRightAPI.svg";
import powersRightXD from "../../assets/home/superpowers/powersRightXD.svg";
import powersRightAI from "../../assets/home/superpowers/powersRightAI.svg";
import powersRightEnd from "../../assets/home/superpowers/powersRightEnd.svg";

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
        <div id="more-powers">
          <img
            id="more-powers-2"
            src={powersRightMySQL}
            className={showPowerIcon}
            alt="more-powers"
          ></img>
          <img
            id="more-powers-3"
            src={powersRightHeroku}
            className={showPowerIcon}
            alt="more-powers"
          ></img>
          <img
            id="more-powers-4"
            src={powersRightVSCode}
            className={showPowerIcon}
            alt="more-powers"
          ></img>
          <img
            id="more-powers-5"
            src={powersRightMongo}
            className={showPowerIcon}
            alt="more-powers"
          ></img>
          <img
            id="more-powers-6"
            src={powersRightWP}
            className={showPowerIcon}
            alt="more-powers"
          ></img>
          <img
            id="more-powers-7"
            src={powersRightgit}
            className={showPowerIcon}
            alt="more-powers"
          ></img>
          <img
            id="more-powers-8"
            src={powersRightRedux}
            className={showPowerIcon}
            alt="more-powers"
          ></img>
          <img
            id="more-powers-9"
            src={powersRightFirebase}
            className={showPowerIcon}
            alt="more-powers"
          ></img>
          <img
            id="more-powers-10"
            src={powersRightAPI}
            className={showPowerIcon}
            alt="more-powers"
          ></img>
          <img
            id="more-powers-11"
            src={powersRightXD}
            className={showPowerIcon}
            alt="more-powers"
          ></img>
          <img
            id="more-powers-12"
            src={powersRightAI}
            className={showPowerIcon}
            alt="more-powers"
          ></img>
          <img
            id="more-powers-13"
            src={powersRightEnd}
            className={showPowerIcon}
            alt="more-powers"
          ></img>
        </div>
        <div id="superpower-heading" className={showPowers}>
          <div id="power-left"></div>
          <h1 id="power-text">MY SUPERPOWERS</h1>
          <div id="power-right"></div>
        </div>
        <div id="superhero-figure" className={flyhero}></div>
        <div id="superPowers-texts">
          <div className="powers-row">
            <div id="javascript" className={showPowerIcon}>
              <div className="powers-texts"></div>
            </div>
            <div id="html5" className={showPowerIcon}>
              <div className="powers-texts"></div>
            </div>
            <div id="css" className={showPowerIcon}>
              <div className="powers-texts"></div>
            </div>
          </div>

          <div className="powers-row">
            <div id="webpack" className={showPowerIcon}>
              <div className="powers-texts"></div>
            </div>
            <div id="react" className={showPowerIcon}>
              <div className="powers-texts"></div>
            </div>
            <div id="node" className={showPowerIcon}>
              <div className="powers-texts"></div>
            </div>
          </div>

          <div className="powers-row">
            <div id="jquery" className={showPowerIcon}>
              <div className="powers-texts"></div>
            </div>
            <div id="sass" className={showPowerIcon}>
              <div className="powers-texts"></div>
            </div>
            <div id="socket" className={showPowerIcon}>
              <div className="powers-texts"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SuperPowers;
