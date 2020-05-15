import React, { Component } from "react";
import PortfolioSlide from "../common/portfolioSlide";

// Importing CSS
import "../../css/home/portfolio.css";
import "../../css/home/portfolio.scss";

// Importing project backgrounds
import ultimateESports from "../../assets/home/portfolio/ultimateesports.png";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { slides: [] };
  }

  componentDidMount() {
    const slides = []; // These are slides of projects
    slides.push({
      title: "Ultimate eSports",
      backgroundImage: ultimateESports,
      info: {
        about:
          "Ultimate eSports is a mobile app for Android and iOS to provide a unique and fun way to arrange and find local eSports tournaments online.",
        stack:
          "It is built using Xamarin. The language is C#. Database is in Firebase.",
        features:
          "Make tournaments, join tournaments, paid and free tournaments, search based on location, social feed, direct messages and much much more!",
        moreInfo: "University Project",
      },
    });

    this.setState({ slides: slides });
  }

  render() {
    return (
      <section id="portfolio">
        <div id="portfolio-heading">
          <h1>Portfolio &amp; My Personal Projects</h1>
        </div>
        <div id="portfolio-slider">
          {this.state.slides.map((slide) => {
            console.log(React.createElement(PortfolioSlide, { data: slide }));
            return React.createElement(PortfolioSlide, {
              data: slide,
              key: slide.title,
            });
          })}
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
