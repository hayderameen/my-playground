import React, { Component } from "react";
import SocialIcon from "../common/socialIcon";
import ContactForm from "../common/contactForm";
import FooterTicker from "../common/footerTicker";

// Importing CSS
import "../../css/home/footer.scss";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { animation: "", popout: "no" };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);

    this.setState({ animation: "pop-out" });
  }

  onScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY >= 3280) {
      // Footer section is now showing
      // Lets display its animations here
      this.setState({
        animation: "pop-in",
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { popout } = this.state;
    if (popout !== "yes" && this.props.popout === "yes") {
      this.setState({
        popout: "yes",
        animation: "pop-in",
      });
    }
  }

  render() {
    return (
      <section id="footer">
        <div id="contact-form-footer" className={this.state.animation}>
          <div className="social-icons">
            <h1 className="heading-footer">
              MY SOCIALS<span>try hovering on them</span>
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
          <div className="contact-form">
            <h1 className="heading-footer">
              CONTACT ME <span>&amp; send your queries</span>
            </h1>
            <ContactForm />
          </div>
        </div>
        <FooterTicker />
      </section>
    );
  }
}

export default Footer;
