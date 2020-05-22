import React, { Component } from "react";

// Importing CSS
import "../../css/common/contactForm.scss";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = (e) => {
    e.preventDefault();

    alert("Form Submitted");
  };
  render() {
    return (
      <form className="contact-form-inner" onSubmit={this.handleSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Name"
          id="name-input"
        />
        <input
          className="form-input"
          type="email"
          name="email"
          id="email-input"
          placeholder="Email"
        />
        <textarea
          className="form-input"
          name="message"
          id="message-input"
          placeholder="Your message"
          rows="10"
        ></textarea>
        <input type="submit" value="Submit" className="form-input" />
      </form>
    );
  }
}

export default ContactForm;
