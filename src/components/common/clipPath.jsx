import React from "react";

// Importing Sass
import "../../css/common/clipPath.scss";

const ClipPath = (props) => {
  const { type, heading, paragraph } = props.data;

  return (
    <div className={`${type} clipPath`}>
      <h1>{heading}</h1>
      <div>{paragraph}</div>
    </div>
  );
};

export default ClipPath;
