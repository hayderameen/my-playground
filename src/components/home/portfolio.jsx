import React, { Component } from "react";
import PortfolioSlide from "../common/portfolioSlide";

// Importing CSS
import "../../css/home/portfolio.css";
import "../../css/home/portfolio.scss";

// Importing project backgrounds
import ultimateESports from "../../assets/home/portfolio/ultimateesports.png";
import zabta from "../../assets/home/portfolio/zabta.png";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [],
      currentSlide: {
        data: {},
        animation: "",
      },
      currentSlideCount: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
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
    slides.push({
      title: "Zabta Cards",
      backgroundImage: zabta,
      info: {
        about:
          "Zabta Cards is an online Web Based multiplayer Poker game. It is different from its competitors because it is a delighful blend of computer logic and human input.",
        stack:
          "The front-end is built with vanilla Javascript, HTML5 and CSS3 only! As for backend, it runs on a Node.js server and uses Socket.io for communicaiton.",
        features:
          "The admin can sign players up and they can start games. Have multiple games. Multiple table sizes. Live movement of cards shown on screen. Cool animations. And everything that you require in a Poker game basically!",
        moreInfo:
          "I built this project for a client and I was personally invested in this product. I spent over 14hrs/day to build this game. This is what I live for.",
      },
    });

    this.setState({
      slides: slides,
      currentSlide: { data: slides[0] },
      currentSlideCount: 0,
      animation: "",
    });
  }

  prevSlide = () => {
    const { slides, currentSlideCount } = this.state;
    if (currentSlideCount > 0) {
      this.setState({
        currentSlideCount: currentSlideCount - 1,
        animation: "scale-down",
      });
    } else {
      this.setState({
        currentSlideCount: slides.length - 1,
        animation: "scale-down",
      });
    }
  };

  nextSlide = () => {
    const { slides, currentSlideCount } = this.state;
    if (currentSlideCount < slides.length - 1) {
      this.setState({
        currentSlideCount: currentSlideCount + 1,
        animation: "scale-down",
      });
    } else {
      this.setState({
        currentSlideCount: 0,
        animation: "scale-down",
      });
    }
  };

  transitionEndDetector = (e) => {
    // Send its reference to portfolioSlide and then update the slide here accordingly

    const { slides, currentSlideCount } = this.state;
    this.setState({
      currentSlide: {
        data: slides[currentSlideCount],
      },
      animation: "scale-up",
    });
  };

  onScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY >= 1580) {
      // My Portfolio section is now showing
      // Lets display its animations here
      this.setState({
        animation: "scale-up",
      });
    }
  };

  render() {
    const { currentSlide, animation } = this.state;

    return (
      <section id="portfolio">
        <div id="portfolio-heading">
          <h1>Portfolio &amp; My Personal Projects</h1>
        </div>
        <div id="portfolio-slider">
          {currentSlide.data.title && (
            <PortfolioSlide
              data={currentSlide.data}
              animation={animation}
              transitionEnd={this.transitionEndDetector}
            />
          )}
        </div>

        {/* These are inline SVGs for left and right buttons */}
        <div id="arrow-left" className="arrow" onClick={this.prevSlide}>
          <svg viewBox="0 0 30 30">
            <path></path>
          </svg>
        </div>
        <div id="arrow-right" className="arrow" onClick={this.nextSlide}>
          <svg viewBox="0 0 30 30">
            <path></path>
          </svg>
        </div>
      </section>
    );
  }
}

export default Portfolio;
