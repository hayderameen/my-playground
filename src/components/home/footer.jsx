import React from "react";
import SocialIcon from "../common/socialIcon";

// Importing CSS
import "../../css/home/footer.scss";

const Footer = () => {
  return (
    <section id="footer">
      <div id="contact-form-footer">
        <div className="social-icons">
          <h1 id="social-icons-heading-footer">
            My Socials <span>try hovering on 'em</span>
          </h1>
          <SocialIcon
            customClass="fb"
            title="Facebook"
            link={() => {
              window.open("https://fb.com/HayderAmeen", "_blank");
            }}
          />
          <SocialIcon
            customClass="twitter"
            title="Twitter"
            link={() => {
              window.open("https://twitter.com/hayder204", "_blank");
            }}
          />
          <SocialIcon
            customClass="linkedin"
            title="LinkedIn"
            link={() => {
              window.open(
                "https://www.linkedin.com/in/hayder-ameen-b8286375/",
                "_blank"
              );
            }}
          />
          <SocialIcon
            customClass="github"
            title="GitHub"
            link={() => {
              window.open("https://github.com/hayderameen/", "_blank");
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
