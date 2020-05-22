import React, { Component } from "react";
import Joi from "@hapi/joi";

// Importing CSS
import "../../css/common/contactForm.scss";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    message: Joi.string().required(),
  });

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.validateInput());
    if (this.validateInput().error) {
      alert("Information missing");
    } else {
      alert("Form Submitted (Fake form, for now)");
    }
  };

  validateInput = () => {
    return this.schema.validate(this.state);
  };

  handleName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handleMessage = (e) => {
    this.setState({ message: e.target.value });
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <form className="contact-form-inner" onSubmit={this.handleSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Name"
          id="name-input"
          value={name}
          onChange={this.handleName}
        />
        <input
          className="form-input"
          type="email"
          name="email"
          id="email-input"
          placeholder="Email"
          value={email}
          onChange={this.handleEmail}
        />
        <textarea
          className="form-input"
          name="message"
          id="message-input"
          placeholder="Your message"
          rows="10"
          value={message}
          onChange={this.handleMessage}
        ></textarea>
        <input type="submit" value="Submit" className="form-input" />
      </form>
    );
  }
}

export default ContactForm;
