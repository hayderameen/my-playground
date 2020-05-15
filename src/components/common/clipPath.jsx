import React, { Component } from "react";

// Importing Sass
import "../../css/common/clipPath.scss";

class ClipPath extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "about",
      heading: "About",
      paragraph: "This is the sample paragraph",
    };
  }

  componentDidMount() {
    if (!this.props.data) return;

    const { data } = this.props;

    this.setState({
      type: data.type,
      heading: data.heading,
      paragraph: data.paragraph,
    });
  }
  render() {
    const { type, heading, paragraph } = this.state;
    return (
      <div className={`${type} clipPath`}>
        <h1>{heading}</h1>
        <div>{paragraph}</div>
      </div>
    );
  }
}

export default ClipPath;
