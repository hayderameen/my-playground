import React from "react";
import SocialIcon from "../common/socialIcon";

// Importing CSS
import "../../css/home/footer.scss";

const Footer = () => {
  return (
    <section id="footer">
      <div id="contact-form-footer">
        <div className="social-icons">
          <SocialIcon
            bg="fb"
            link={() => {
              window.location = "https://fb.com/HayderAmeen";
            }}
          />
          <SocialIcon
            bg="twitter"
            link={() => {
              window.location = "https://twitter.com/hayder204";
            }}
          />
          <SocialIcon
            bg="linkedIn"
            link={() => {
              window.location =
                "https://www.linkedin.com/in/hayder-ameen-b8286375/";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
