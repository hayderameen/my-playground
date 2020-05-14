import React, { Component } from "react";
import Cover from "./cover";
import HomeVectors from "./homeVectors";
import MySkills from "./mySkills";
import SuperPowers from "./superPowers";
import Portfolio from "./portfolio";

class Home extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div>
          <HomeVectors />
          <Cover />
          <MySkills />
          <SuperPowers />
          <Portfolio />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
