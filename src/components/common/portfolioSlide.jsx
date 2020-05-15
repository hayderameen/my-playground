import React, { Component } from "react";
import ClipPath from "../../components/common/clipPath";

class PortfolioSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <h1>Inline SVG for arrows left and right</h1>
        <h1>Background board for showing overall</h1>
        <ClipPath
          data={{
            type: "stack",
            heading: "stack",
            paragraph: "This is sample para for tech stack!",
          }}
        />
      </React.Fragment>
    );
  }
}

export default PortfolioSlide;
