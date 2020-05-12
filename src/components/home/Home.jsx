import React, { Component } from "react";
import Cover from "./cover";
import HomeVectors from "./homeVectors";
import MySkills from "./mySkills";

class Home extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <HomeVectors />
        <Cover />
        <MySkills />
      </React.Fragment>
    );
  }
}

export default Home;
