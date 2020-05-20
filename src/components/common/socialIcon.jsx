import React from "react";

const SocialIcon = (props) => {
  const { bg, link } = props;
  return <div className={`social-icon ${bg}`} onClick={link}></div>;
};

export default SocialIcon;
