import React from "react";

// Importing CSS
import "../../css/common/socialIcon.scss";

const SocialIcon = (props) => {
  const { customClass, link, title } = props;
  return (
    <button className={`social-icon ${customClass}`} onClick={link}>
      <span>{title}</span>
      <div></div>
    </button>
  );
};

export default SocialIcon;
