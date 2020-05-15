import React, { Component } from "react";

// Importing CSS
import "../../css/home/portfolio.css";
import ClipPath from "../common/clipPath";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section id="portfolio">
        <h1>Portfolio</h1>
        <h1>Clip Path for showing parts of projects</h1>
        <h1>Inline SVG for arrows left and right</h1>
        <h1>Background board for showing overall</h1>
        <ClipPath />
      </section>
    );
  }
}

export default Portfolio;
