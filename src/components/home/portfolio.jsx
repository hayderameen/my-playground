import React, { Component } from "react";
import PortfolioSlide from "../common/portfolioSlide";

// Importing CSS
import "../../css/home/portfolio.css";
import "../../css/home/portfolioSass.scss";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section id="portfolio">
        <div id="portfolio-heading">
          <h1>Portfolio &amp; My Personal Projects</h1>
        </div>
        <div id="portfolio-slider">
          <PortfolioSlide />
        </div>

        {/* These are inline SVGs for left and right buttons */}
        <div id="arrow-left" className="arrow">
          <svg viewBox="0 0 30 30">
            <path></path>
          </svg>
        </div>
        <div id="arrow-right" className="arrow">
          <svg viewBox="0 0 30 30">
            <path></path>
          </svg>
        </div>
      </section>
    );
  }
}

export default Portfolio;
