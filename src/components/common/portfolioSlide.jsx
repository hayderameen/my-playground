import React from "react";
import ClipPath from "../../components/common/clipPath";

// Importing CSS
import "../../css/common/portfolioSlide.css";

const PortfolioSlide = (props) => {
  const { animation, transitionEnd } = props;
  const { title, backgroundImage } = props.data;
  const { about, stack, features, moreInfo } = props.data.info;
  return (
    <div className={`slide ${animation}`} onTransitionEnd={transitionEnd}>
      <h1 className="slide-title">{title}</h1>
      <div id="img-data-container">
        <div id="img-part">
          <img src={backgroundImage} alt={title}></img>
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
