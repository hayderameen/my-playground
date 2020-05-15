import React, { Component } from "react";
import ClipPath from "../../components/common/clipPath";

// Importing CSS
import "../../css/common/portfolioSlide.css";

const PortfolioSlide = (props) => {
  const { title, backgroundImage, info } = props.data;
  const { about, stack, features, moreInfo } = info;
  return (
    <div className="slide">
      <h1 className="slide-title">{title}</h1>
      <div id="img-data-container">
        <div id="img-part">
          <img src={backgroundImage}></img>
        </div>
        <div id="data-part">
          <ClipPath
            data={{
              type: "about",
              heading: "About",
              paragraph: about,
            }}
          />
          <ClipPath
            data={{
              type: "stack",
              heading: "Stack",
              paragraph: stack,
            }}
          />
          <ClipPath
            data={{
              type: "features",
              heading: "Features",
              paragraph: features,
            }}
          />
          <ClipPath
            data={{
              type: "more-info",
              heading: "More Info",
              paragraph: moreInfo,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioSlide;
