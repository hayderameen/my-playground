import React from "react";

// Importing graphics
import pictureCover from "../../assets/home/fullPage/picture-cover.svg";

// Importing CSS
import "../../css/home/homeVectors.css";

const HomeVectors = () => {
  return (
    <React.Fragment>
      <img id="picture-cover-vector" src={pictureCover} alt="vector"></img>
      <div id="superpowers-line-right"></div>
    </React.Fragment>
  );
};

export default HomeVectors;
